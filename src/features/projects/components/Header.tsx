/**
 * Componente HeaderProject - Intestazione pagina progetti
 *
 * Titolo della pagina e introduzione essenziale alla collezione
 * di progetti, senza il vecchio testo esplicativo.
 */
export const HeaderProject = () => {
  return (
    <header className="w-full space-y-4 text-left">
      <h1>Archivio Progetti</h1>
      <p>
        Una collezione curata di applicazioni web focalizzate su design
        responsive, prestazioni e codice pulito. Esplora i miei lavori recenti.
      </p>
    </header>
  );
};
