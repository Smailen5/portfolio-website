/**
 * Componente H2 - Heading di livello 2
 *
 * Titolo principale per sezioni della pagina con supporto per:
 * - Accessibilità: può essere nascosto visivamente ma accessibile agli screen reader
 * - Allineamento: supporto per testo centrato
 *
 * @param {string} children - Testo del titolo
 * @param {boolean} [screenReaderOnly] - Se true, applica classe `sr-only` per accessibilità
 * @param {boolean} [textCenter] - Se true, centra il testo
 */
export const H2 = ({
  children,
  screenReaderOnly,
  textCenter,
}: {
  children: string;
  screenReaderOnly?: boolean;
  textCenter?: boolean;
}) => {
  return (
    <h2
      className={`text-secondary text-2xl font-bold capitalize ${screenReaderOnly ? 'sr-only' : ''} ${textCenter ? 'text-center' : ''}`}
    >
      {children}
    </h2>
  );
};
