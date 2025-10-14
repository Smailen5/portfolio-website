import { fetchProjects } from "@/api/getProjects";
import { CardProject } from "@/features/projects/components/Card";
import { Project } from "@/shared/types/projects";
import { useEffect, useState } from "react";

/**
 * Componente LastProjects - Ultimi progetti in homepage
 *
 * Mostra gli ultimi N progetti (configurabile con showLastProjects)
 * dalla lista completa recuperata da GitHub API
 *
 * @see fetchProjects - Funzione per recuperare i progetti da API
 * @see CardProject - Componente per visualizzare singolo progetto
 */
export const LastProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  // !Modifica qui i progetti da mostrare
  const showLastProjects = 3;

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <section className="mx-auto flex w-full flex-col gap-4">
        <h2 className="text-primary font-bold">Guarda i miei ultimi lavori</h2>
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, showLastProjects).map((project: Project) => (
            <CardProject key={project.name} {...project} />
          ))}
        </main>
      </section>
    </>
  );
};
