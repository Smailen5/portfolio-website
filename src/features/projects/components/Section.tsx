// import { ErrorMessage } from "@/components/atoms/ErrorMessage";
// import { CardProject } from "@/features/projects/components/Card";
// import { SkeletonLoaderCard } from "@/features/projects/components/Skeleton";
// import { useFilter } from "@/features/projects/hooks/useFilter";
// import { Filter } from "@features/projects/components/Filter";

import { fetchProjects } from '@/server/getProjects';
import { Project } from '@/shared/types/projects';
import { useServerFn } from '@tanstack/react-start';
import { useEffect, useState } from 'react';
import { CardProject } from './Card';
import { Filter } from './Filter';

export const SectionProjects = () => {
  // const {
  //   loading,
  //   error,
  //   filteredProjects,
  //   setSelectedFilter,
  //   numberFilteredProjects,
  // } = useFilter();
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
      {/* <Filter
        setSelectedFilter={setSelectedFilter}
        number={numberFilteredProjects}
      />
      {numberFilteredProjects === 0 ? (
        <p>Nessun progetto trovato.</p>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? filteredProjects.map((_, index) => (
                <SkeletonLoaderCard key={index} />
              ))
            : filteredProjects.map((project, index) => {
                return <CardProject key={index} {...project} />;
              })}
        </section>
      )} */}
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
