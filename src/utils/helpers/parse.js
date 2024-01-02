import PostalMime from "postal-mime";

export const parse = async (data) => {
  if (!data) {
    return null;
  }

  const parser = new PostalMime();
  const res = await parser.parse(data);

  console.log(res);

  const {
    attachments,
    date,
    from,
    headers,
    html,
    messageId,
    subject,
    text,
    to,
  } = res;

  const email = {
    id: messageId,
    subject,
    date,
    importance: "", // TODO
    sensitivity: "", // TODO
  };

  const participants = {
    from: from && { ...from, domain: parseDomainFromAddress(from.address) },
    to:
      to &&
      to.map((obj) => ({
        ...obj,
        domain: parseDomainFromAddress(obj.address),
      })),
  };

  const content = {
    html,
    text,
    links: [], // TODO
    attachments:
      attachments &&
      attachments.map((attachment) => ({
        ...attachment,
        size: attachment?.content?.byteLength,
        threat: false, // TODO
      })),
  };

  const domain = {
    name: "",
    IP: { v4: [], v6: [] },
    MX: [],
    DMARC: {},
    SPF: {},
    DKIM: {},
  }; // TODO

  const received = { delay: "", relayPath: [] }; // TODO

  const security = {
    threatLevel: "",
    maliciousLinks: [],
    maliciousAttachments: [],
  }; // TODO

  return {
    email,
    participants,
    content,
    headers: { list: headers }, // { delivery: {}, spfDkim: {}, list: {} }
    domain,
    received,
    security,
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
