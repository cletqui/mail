import PostalMime from "postal-mime";
import Pattern from "url-knife";

/**
 * Parses the given data and returns a modified object with additional properties.
 * @async @function parse
 * @param {any} data - The data to be parsed.
 * @returns {Promise<Object|null>} - A Promise that resolves to the modified object or null if the data is null.
 */
export const parse = async (data) => {
  if (!data) {
    return null;
  }

  const parser = new PostalMime();
  const res = await parser.parse(data);

  return {
    ...res,
    attachments: res.attachments?.map((attachment) => ({
      ...attachment,
      size: attachment.content?.byteLength,
    })),
    participants: {
      from: {
        ...res.from,
        domain: parseDomainFromAddress(res.from?.address),
      },
      to: res.to?.map((obj) => ({
        ...obj,
        domain: parseDomainFromAddress(obj.address),
      })),
    },
    links: parseUrlFromText(res.text || res.html), // TODO extract URL from HTML (if text is undefined)
  };
};

/**
 * Extracts the domain from an email address string.
 * @function parseDomainFromAddress
 * @param {string} emailString - The email address string from which to extract the domain.
 * @returns {string|null} - The extracted domain or null if no match is found.
 */
const parseDomainFromAddress = (emailString) => {
  const regex = /@([^\s<>@]+)$/;
  return emailString?.match(regex)?.[1] ?? null;
};

const parseUrlFromText = (textString) => {
  const urls = extractUrlFromText(textString);
  const nestedUrls = urls.flatMap((url) => processUrl(url));

  return nestedUrls.map((url) => {
    return { ...url, verdict: "undefined" };
  });
};

/**
 * Extracts URLs from the given text string (only if protocol is specified).
 * @function extractUrlFromText
 * @param {string} textString - The text string to extract URLs from.
 * @returns {Array<any>} An array of extracted URLs.
 */
const extractUrlFromText = (textString) => {
  if (!textString) {
    return null;
  }

  const urls = Pattern.TextArea.extractAllUrls(textString, {
    ip_v4: true,
    ip_v6: true,
    localhost: true,
    intranet: true,
  });
  return urls.filter((url) => url.value.protocol !== null);
};

const createUrlObject = (urlData, nested = "false") => ({
  url: urlData.url,
  protocol: urlData.protocol,
  domain: urlData.onlyDomain,
  nested,
});

const processUrl = (obj) => {
  const { onlyParamsJsn } = obj.value || {};
  const result = [createUrlObject(obj.value)];

  const nestedUrl = extractUrlFromText(onlyParamsJsn?.url)?.[0]?.value;
  if (nestedUrl) {
    result.push(createUrlObject(nestedUrl, true));
  }

  return result;
};

export const parseReceivedHeader = (headers) => {
  const received = extractHeader(headers, ["received", "x-received"]);
  return processReceivedHeader(received);
};

/**
 * Extracts headers from an array based on a specified key.
 * @function extractHeader
 * @param {Array} headers - The array of headers to extract from.
 * @param {string} key - The key to filter the headers by.
 * @returns {Array} - An array of headers matching the specified key.
 */
const extractHeader = (headers, keys) => {
  return headers.filter((header) => keys.includes(header["key"]));
};

const processReceivedHeader = (received) => {
  let previousTime;

  /**
   * Sorts objects `a` and `b` based on their `time` property.
   * @function sortByTime
   * @param {object} a - The first object to compare.
   * @param {object} b - The second object to compare.
   * @returns {number} The difference in milliseconds between the `time` property of `a` and `b`.
   */
  const sortByTime = (a, b) => {
    const dateA = new Date(a?.time);
    const dateB = new Date(b?.time);
    return dateA - dateB;
  };

  return received
    .map((obj) => {
      const { value } = obj;

      let from, by, protocol, time;
      const regex = /from\s(.*?)\sby\s(.*?)\swith\s(.*?)\s*;\s*(.*?$)/; // TODO fix parsing when fields are missing
      const match = value.match(regex);
      if (match) {
        [, from, by, protocol, time] = match;
      }

      const blacklist = "none"; // TODO
      return { from, by, with: protocol, time, blacklist };
    })
    .sort(sortByTime)
    .flatMap((obj, index) => {
      const { time } = obj; // TODO deal with entries where time is not defined

      const hop = index + 1;

      let delay;
      if (index === 0) {
        delay = "*";
      } else {
        delay = `${(new Date(time) - new Date(previousTime)) / 1000}s`;
      }
      previousTime = time;

      return { hop, delay, ...obj };
    });
};
