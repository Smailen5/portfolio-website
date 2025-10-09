import { Project } from "@/shared/types/projects";
import { Dispatch, SetStateAction, useState } from "react";

interface FilterProps {
  setFilteredProject: Dispatch<SetStateAction<Project[]>>;
  projectsNoFiltered: Project[];
  number?: number;
}

const technologies = [
  "Tutto",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Next.js",
  "Responsive design",
];

export const Filter = ({
  setFilteredProject,
  projectsNoFiltered,
  number,
}: FilterProps) => {
  // Stato per chiudere il dropdown
  const [isOpen, setIsOpen] = useState(false);
  // Stato per il filtro selezionato
  const [selectedTechnology, setSelectedTechnology] = useState("Tutto");

  // Funzione per filtrare i progetti
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
                <a href="#filter" onClick={(e) => {e.preventDefault(),handleFilter(tech)}}>
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
