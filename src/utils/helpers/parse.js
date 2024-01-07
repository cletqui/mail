import PostalMime from "postal-mime";

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
        domain: res.from?.address && parseDomainFromAddress(res.from.address),
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
 * @function @name parseDomainFromAddress
 * @param {string} emailString - The email address string from which to extract the domain.
 * @returns {string|null} - The extracted domain or null if no match is found.
 */
const parseDomainFromAddress = (emailString) => {
  const regex = /@([^\s<>@]+)$/;
  return emailString?.match(regex)?.[1] ?? null;
};

const parseUrlFromText = (textString) => {
  const regex =
    /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])/;
  return textString?.match(regex);
};
