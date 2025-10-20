// Tronca il testo se e' piu' lungo di maxLength
export const truncate = (text: string, maxLength = 140) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};
