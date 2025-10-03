import { CardProject } from "@/features/projects/components/Card";
import { Project } from "@/shared/types/projects";
import { Section } from "@components/atoms/Section";
import { useServerFn } from '@tanstack/react-start';
import { useEffect, useState } from 'react';
import { fetchProjects } from '@server/projectService';

export const LastProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  // !Modifica qui i progetti da mostrare
  const showLastProjects = 3;

  // Server Function che recupera i progetti
  const getProjects = useServerFn(fetchProjects)

  useEffect(()=> {
    getProjects().then(data => {
      console.log(data)
      setProjects(data)
    }).catch(err =>{
      console.error(err.message)
    })
  },[getProjects])

  return (
    <>
      <Section>
        <h2 className='text-primary-content'>
          Guarda i miei ultimi lavori
        </h2>
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, showLastProjects)
            .map((project: Project) => (
              <CardProject key={project.name} {...project} />
            ))}
        </main>
      </Section>
    </>
  );
};
