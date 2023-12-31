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
