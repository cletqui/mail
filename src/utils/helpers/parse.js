import PostalMime from "postal-mime";

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

  console.log(res);

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
    links: parseUrlFromText(res.text),
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

/**
 * Extracts the list of URLs from a given text string.
 * @function parseUrlFromText
 * @param {string} textString - The text string to parse URLs from.
 * @returns {string[]} - An array of URLs found in the text string.
 */
const parseUrlFromText = (textString) => {
  const decodedURITextString = decodeURIComponent(textString);
  const regex =
    /(?:<\s*)((https?|ftp):\/\/[^\s/$.?#].[^\s]*|www\.[^\s/$.?#].[^\s]*)(?=\s*>)/gi; // TODO extract URL inside URL
  return (decodedURITextString.match(regex) || []).map((url) =>
    url.replace(/<\s*/, "")
  );
};

export const parseReceivedHeader = (headers) => {
  const received = extractHeader(headers, "received");
  return processReceivedHeader(received);
};

/**
 * Extracts headers from an array based on a specified key.
 * @function extractHeader
 * @param {Array} headers - The array of headers to extract from.
 * @param {string} key - The key to filter the headers by.
 * @returns {Array} - An array of headers matching the specified key.
 */
const extractHeader = (headers, key) => {
  return headers.filter((header) => header["key"] === key);
};

const processReceivedHeader = (received) => {
  let previousTime;

  return received.reverse().map((obj, index) => {
    const { value } = obj;

    const hop = index + 1;

    let delay, from, by, protocol, time;
    const regex = /from\s(.*?)\sby\s(.*?)\swith\s(.*?);\s(.*?$)/;
    const match = value.match(regex);
    if (match) {
      [, from, by, protocol, time] = match;
    }

    if (index === 0) {
      delay = "*";
    } else {
      delay = `${(new Date(time) - new Date(previousTime)) / 1000}s`;
    }
    previousTime = time;

    const blacklist = "none"; // TODO
    return { hop, delay, from, by, with: protocol, time, blacklist };
  });
};
