/**
 * Converts a number of bytes into a human-readable format.
 *
 * @param {number|string} x - The number of bytes to convert.
 * @returns {string} The human-readable representation of the number of bytes.
 */
export const niceBytes = (x) => {
  const units = ["octets", "Ko", "Mo", "Go", "To", "Po", "Eo", "Zo", "Yo"];
  const n = parseInt(x, 10) || 0;
  const l = Math.floor(Math.log10(n) / 3);
  const value = n / Math.pow(1024, l);

  return `${value.toFixed(value < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
};

/**
 * Returns the description for a given SPF type.
 * @function @name getSPFDescription
 * @param {string} type - The SPF type.
 * @returns {string} The description for the given SPF type.
 */
export const getSPFDescription = (type) => {
  const SPFDescriptions = {
    v: "The SPF record version.",
    a: 'Match if IP has a DNS "A" record in given domain.',
    mx: "Match if IP is one of the MX hosts for given domain name.",
    ip4: "Match if IP is in the given range.",
    ptr: "Match if the IP matches the hostnames using PTR queries.",
    exists: 'Match if an "A" entry exists for the given domain.',
    include: 'The specified domain is searched for an "allow".',
    all: "Always matches. It goes at the end of your record.",
  };

  return SPFDescriptions[type] ?? "";
};
