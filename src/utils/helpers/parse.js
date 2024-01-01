import PostalMime from "postal-mime";

export const parse = async (data) => {
  const parser = new PostalMime();
  const res = await parser.parse(data);

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
    importance: "",
    sensitivity: "",
  };

  const participants = {
    from: { ...from, domain: parseDomainFromAddress(from.address) },
    to: to.map((obj) => ({
      ...obj,
      domain: parseDomainFromAddress(obj.address),
    })),
  };

  return {
    email,
    participants,
    content: { html, text, attachments }, // { text: "", html: "", links: [], attachments: [ { name: "", size: "", type: "", threat: false, node: {} } ], bodyStructure: "" }
    headers: { list: headers }, // { delivery: {}, spfDkim: {}, list: {} }
    domain: {}, // { name: "", IPAddresses: { IPv4: [], IPv6: [] }, MXRecords: [], DMARCHeader: {}, SPFHeader: {}, DKIMHeader: {} }
    received: {}, // { delay: "", relayPath: [] }
    security: {}, // { threatLevel: "", maliciousLinks: [], maliciousAttachments: [] }
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
  const match = emailString.match(regex);
  return match ? match[1] : null;
};
