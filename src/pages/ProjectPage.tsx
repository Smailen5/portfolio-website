import { HeaderProject } from "@/Components/molecules/HeaderProject";
import Footer from "../Components/organisms/Footer";
import NavbarSample from "../Components/organisms/Navbar";
import Project from "../Components/organisms/Project";
import projects from "../data/projects.json";
import useScroll from "../utils/useScroll";

const ProjectsScreen = () => {
  useScroll();
  return (
    <>
      <NavbarSample />
      <div className="flex min-h-screen justify-center bg-neutral-50 py-16">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 text-center xl:max-w-[1024px]">
          <HeaderProject />
          
          {/* CONTENITORE PROGETTI */}
          <section className="grid gap-4 lg:grid-cols-2">
            {projects.map((project) => {
              return <Project key={project.id} {...project} />;
            })}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectsScreen;
