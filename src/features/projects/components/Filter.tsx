import { Project } from "@/shared/types/projects";
import { Dispatch, SetStateAction, useEffect } from "react";

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
  "Form",
  "Responsive",
];

export const Filter = ({
  setFilteredProject,
  projectsNoFiltered,
  number,
}: FilterProps) => {
  useEffect(() => {
    setFilteredProject(projectsNoFiltered);
  }, [projectsNoFiltered, setFilteredProject]);

  const handleFilter = (technology: string) => {
    if (technology === "Tutto") return setFilteredProject(projectsNoFiltered);

    const filteredProjects = projectsNoFiltered.filter((project) => {
      // Se non ci sono tecnologie, non filtrare
      if (!project.technologies || project.technologies.length === 0)
        return false;

      return project.technologies.includes(technology.toLowerCase());
    });
    setFilteredProject(filteredProjects);
  };

  return (
    <section className="bg-secondary text-secondary-foreground flex w-full flex-col items-start gap-8 rounded-md p-2 md:flex-row md:items-end md:justify-between md:gap-0">
      <details className="dropdown">
        <summary className="btn m-1">Seleziona una tecnologia</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
          {technologies.map((technologie) => {
            return (
              <li key={technologie}>
                <a onClick={() => handleFilter(technologie)}>{technologie}</a>
              </li>
            );
          })}
        </ul>
      </details>
      <p>
        Progetti visualizzati: <span className="font-semibold">{number}</span>
      </p>
    </section>
  );
};
