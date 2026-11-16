import { FILTER_TECHNOLOGIES } from '@/shared/constants/filterTechnologies';

interface FilterProps {
  selected: string;
  onSelect: (tech: string) => void;
  counts: Record<string, number>;
}

/**
 * Componente Filter - Barra di pillole di filtro (controllato)
 *
 * Mostra le tecnologie come pillole con il conteggio dei progetti in tempo
 * reale. Le tecnologie senza progetti non vengono mostrate, mentre "Tutto"
 * resta sempre visibile. Su schermi stretti le pillole vanno a capo.
 *
 * @param {FilterProps} props - selected: tecnologia attiva, onSelect: callback
 * di selezione, counts: conteggio progetti per tecnologia
 */
export const Filter = ({ selected, onSelect, counts }: FilterProps) => {
  const options = ['Tutto', ...FILTER_TECHNOLOGIES].filter(
    label => label === 'Tutto' || (counts[label] ?? 0) > 0
  );

  return (
    <section
      id="filter"
      className="bg-base-100 border-primary/40 w-full rounded-lg border p-3"
    >
      <ul className="flex flex-wrap gap-2">
        {options.map(label => {
          const isActive = selected === label;
          return (
            <li key={label}>
              <button
                type="button"
                onClick={() => onSelect(label)}
                aria-pressed={isActive}
                className={`cursor-pointer rounded-md border px-3 py-1 text-sm font-semibold transition-colors duration-300 ease-out ${
                  isActive
                    ? 'border-primary bg-primary/20 text-primary'
                    : 'border-primary/40 text-base-content/70 hover:border-primary hover:text-primary'
                }`}
              >
                {label} ({counts[label] ?? 0})
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
