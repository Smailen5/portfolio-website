// Non serve piu rimuovere "master", "main" o "app", il nuovo nome e' gia' pulito
export const nameCorrect = (name: string) =>
  name
    .replace(/-/g, ' ') // Sostituisce "-" con uno spazio
    .replace(/\s+/g, ' ') // Rimuove gli spazi multipli
    .trim(); // Rimuove eventuali spazi iniziali o finali
