export const nameCorrect = (name: string) =>
  name
    .replace(/-|main|master|app|component/g, " ") // Sostituisce le parole specificate con uno spazio
    .replace(/\s+/g, " ") // Rimuove gli spazi multipli
    .trim(); // Rimuove eventuali spazi iniziali o finali
