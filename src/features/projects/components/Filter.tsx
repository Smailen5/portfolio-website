import { useState } from 'react';

interface FilterProps {
  selected: string;
  onSelect: (tech: string) => void;
  number?: number;
}

/**
 * Lista delle tecnologie disponibili per il filtro
 * "Tutto" resetta il filtro e mostra tutti i progetti
 */
const technologies = [
  'Tutto',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'React',
  'Next.js',
  'Responsive design',
];

/**
 * Componente Filter - Filtro progetti per tecnologia
 *
 * Permette di filtrare i progetti visualizzati in base alla tecnologia utilizzata
 * usando un dropdown DaisyUI
 *
 * Funzionalità:
 * - Dropdown con lista tecnologie predefinite
 * - Filtraggio case-insensitive
 * - Contatore progetti filtrati
 * - Reset con opzione "Tutto"
 *
 * @param {FilterProps} props - Funzione setter, progetti originali, conteggio
 */
export const Filter = ({ selected, onSelect, number }: FilterProps) => {
  // Stato per chiudere il dropdown
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (tech: string) => {
    onSelect(tech);
    setIsOpen(false);
  };

  return (
    <section
      id="filter"
      className="rounded-box bg-secondary flex w-full flex-col items-start gap-8 p-2 md:flex-row md:items-center md:justify-between md:gap-0"
    >
      <details
        className="dropdown"
        open={isOpen}
        onToggle={e => setIsOpen(e.currentTarget.open)}
      >
        <summary className="btn m-1">Seleziona una tecnologia</summary>
        <ul className="dropdown-content menu rounded-box bg-base-100 z-10 w-52 p-3 shadow-sm">
          {technologies.map(tech => {
            return (
              <li key={tech}>
                <a href="#filter" onClick={() => handleSelect(tech)}>
                  {tech}
                </a>
              </li>
            );
          })}
        </ul>
      </details>
      <p className="text-secondary-content pl-2 md:p-0 md:pr-2">
        Progetti {selected === 'Tutto' ? 'visualizzati' : `${selected}`}:{' '}
        <span className="font-semibold">{number}</span>
      </p>
    </section>
  );
};
