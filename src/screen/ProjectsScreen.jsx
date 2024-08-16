import Footer from "../Components/Footer";
import NavbarSample from "../Components/Navbar";
import Project from "../Components/Project";
import projects from "../data/projects.json";

const ProjectsScreen = () => {
  return (
    <>
      <NavbarSample />
      <div className="flex min-h-screen justify-center bg-neutral-50 py-16">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 text-center xl:max-w-[1024px]">
          <div className="space-y-4">
            <p>
              Questi progetti sono esercizi di Frontend Mentor, creati per
              affinare le competenze acquisite durante i miei studi, affrontando
              sfide di sviluppo front-end.
            </p>
            <p>
              Puoi vedere tutti i miei lavori su Frontend Mentor e React{" "}
              {/* aggiungi link al file readme con tutti gli esercizi */}
              <a
                href="https://smailen5.github.io/Frontend-Mentor-Challenge/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                qui
              </a>
              . Su {/* aggiungi link alle repository di github */}
              <a
                href="https://github.com/Smailen5?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                GitHub
              </a>{" "}
              trovi anche una raccolta completa, inclusi i progetti reali in
              uso.
            </p>
          </div>
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
