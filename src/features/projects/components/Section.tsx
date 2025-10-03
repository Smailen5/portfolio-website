
import { fetchProjects } from '@/server/getProjects';
import { Project } from '@/shared/types/projects';
import { useServerFn } from '@tanstack/react-start';
import { useEffect, useState } from 'react';
import { CardProject } from './Card';
import { Filter } from './Filter';

export const SectionProjects = () => {
  const getProjects = useServerFn(fetchProjects);

  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(()=> {
    getProjects().then(data => {
      // console.log(data)
      setProjects(data)
    }).catch(err =>{
      console.error(err.message)
    })
  },[getProjects])

  return (
    <>
      <div>
        <Filter number={filteredProjects.length} setFilteredProject={setFilteredProjects} projectsNoFiltered={projects} />
        <section className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {filteredProjects.map((project : Project) => (
          <CardProject key={project.name} {...project} />
        )) }
        </section>
      </div>
    </>
  );
};
