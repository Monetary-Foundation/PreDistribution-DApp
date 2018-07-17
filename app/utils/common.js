/**
 * Formats the given value by removing decimal and adding commas
 * @param {string} val The number to format
 * @returns string
 */
export const formatNumber = (val) => {
  const parts = val.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts[0];
};
