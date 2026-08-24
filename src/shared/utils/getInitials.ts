export const getInitials = (name: string) => {
  if (!name) return '';
  const words = name.split(' ');
  const initials = words
    .slice(0, words.length)
    .map(word => word.charAt(0).toUpperCase());
  return initials.join('');
};
