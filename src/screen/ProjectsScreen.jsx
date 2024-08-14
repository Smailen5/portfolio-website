import NavbarSample from "../Components/Navbar";
import Project from "../Components/Project";
import projects from "../data/projects.json";

const ProjectsScreen = () => {
  return (
    <>
      <NavbarSample />
      <div className="flex min-h-screen justify-center bg-neutral-50 py-16">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 text-center xl:max-w-[1024px]">
          <p>
            Questi progetti sono stati realizzati come esercizi su Frontend
            Mentor, con l'obiettivo di affinare le competenze che ho acquisito
            durante i miei studi. Sono esercizi che mi hanno permesso di mettere
            in pratica e migliorare le tecnologie apprese, affrontando sfide
            reali di sviluppo front-end.
          </p>
          <p>
            Se siete interessati a vedere tutti i miei lavori su Frontend Mentor
            e React, potete visitare il file README. Inoltre, su GitHub
            troverete una raccolta completa di tutti i miei progetti, inclusi
            quelli reali che sono attualmente in uso.
          </p>
          {/* CONTENITORE PROGETTI */}
          <section className="grid gap-4 lg:grid-cols-2">
            {projects.map((project) => {
              return <Project key={project.id} {...project} />;
            })}
            {/* <Project /> */}
            {/* <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project /> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectsScreen;
