// Estrae le iniziali da name
// !Fa attenzione che non ci siano troppe iniziali
export const getInitials = (name: string) => {
  if (!name) return '';
  const words = name.split(' ');
  const initials = words
    .slice(0, words.length)
    .map(word => word.charAt(0).toUpperCase());
  return initials.join('');
};
