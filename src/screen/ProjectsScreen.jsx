import NavbarSample from "../Components/Navbar";
import Project from "../Components/Project";

const ProjectsScreen = () => {
  return (
    <>
      <NavbarSample />
      <div className="flex min-h-screen justify-center bg-green-300 py-16">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 text-center xl:max-w-[1024px]">
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis fuga molestias a dolorum eos, vitae laudantium nulla
            eligendi, hic necessitatibus sapiente.
          </h4>
          {/* CONTENITORE PROGETTI */}
          <section className="grid gap-4 lg:grid-cols-2">
            <Project />
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
