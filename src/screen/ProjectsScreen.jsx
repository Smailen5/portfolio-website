import NavbarSample from "../Components/Navbar";
import Project from "../Components/Project";
import projects from "../data/projects.json";

const ProjectsScreen = () => {
  console.log(projects[0].title);
  
  return (
    <>
      <NavbarSample />
      <div className="flex min-h-screen justify-center bg-green-300 py-16">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 text-center xl:max-w-[1024px]">
          <h4>
            Breve introduzione di tutti i progetti che ho sviluppato
          </h4>
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
