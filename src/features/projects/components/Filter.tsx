import { Project } from "@/shared/types/projects";
import { Dispatch, SetStateAction, useState } from "react";

interface FilterProps {
  setFilteredProject: Dispatch<SetStateAction<Project[]>>;
  projectsNoFiltered: Project[];
  number?: number;
}

/**
 * Lista delle tecnologie disponibili per il filtro
 * "Tutto" resetta il filtro e mostra tutti i progetti
 */
const technologies = [
  "Tutto",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Next.js",
  "Responsive design",
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
export const Filter = ({
  setFilteredProject,
  projectsNoFiltered,
  number,
}: FilterProps) => {
  // Stato per chiudere il dropdown
  const [isOpen, setIsOpen] = useState(false);
  // Stato per il filtro selezionato
  const [selectedTechnology, setSelectedTechnology] = useState("Tutto");

  /**
   * Filtra i progetti in base alla tecnologia selezionata
   * Se "Tutto" mostra tutti i progetti, altrimenti filtra per tecnologia
   */
  const handleFilter = (technology: string) => {
    if (technology === "Tutto")
      return (
        setFilteredProject(projectsNoFiltered),
        setIsOpen(false),
        setSelectedTechnology(technology)
      );

    const filteredProjects = projectsNoFiltered.filter((project) => {
      // Se non ci sono tecnologie, non filtrare
      if (!project.technologies || project.technologies.length === 0)
        return false;

      return project.technologies.includes(technology.toLowerCase());
    });
    setFilteredProject(filteredProjects);
    setSelectedTechnology(technology);
    setIsOpen(false);
  };

  return (
    <section
      id="filter"
      className="bg-secondary flex w-full flex-col items-start gap-8 rounded-md p-2 md:flex-row md:items-end md:justify-between md:gap-0"
    >
      <details
        className="dropdown"
        open={isOpen}
        onToggle={(e) => setIsOpen(e.currentTarget.open)}
      >
        <summary className="btn m-1">Seleziona una tecnologia</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
          {technologies.map((tech) => {
            return (
              <li key={tech}>
                <a
                  href="#filter"
                  onClick={() => {
                    handleFilter(tech);
                  }}
                >
                  {tech}
                </a>
              </li>
            );
          })}
        </ul>
      </details>
      <p className="text-secondary-content">
        Progetti{" "}
        {selectedTechnology === "Tutto"
          ? "visualizzati"
          : `${selectedTechnology}`}
        : <span className="font-semibold">{number}</span>
      </p>
    </section>
  );
};
