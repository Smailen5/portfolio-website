import { CardProject } from "@/features/projects/components/Card";
import { Project } from "@/shared/types/projects";
import { Header } from "@components/atoms/Header";
import { Section } from "@components/atoms/Section";
import { useServerFn } from '@tanstack/react-start';
import { useEffect, useState } from 'react';
import { fetchProjects } from '../service/projectService';

export const LastProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  // !Modifica qui i progetti da mostrare
  const showLastProjects = 3;

  const getProjects = useServerFn(fetchProjects)

  useEffect(()=> {
    getProjects().then(data => {
      console.log(data)
      setProjects(data)
    }).catch(err =>{
      console.error(err.message)
    })
  },[getProjects])

  // Accedi ai dati dal loader
  return (
    <>
      <Section>
        <Header type="h2" titleID="ultimi lavori">
          Guarda i miei ultimi lavori
        </Header>
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
