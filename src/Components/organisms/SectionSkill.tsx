// import { Button } from "@/Components/atoms/button";
// import { GoProjectRoadmap } from "react-icons/go";
// import { useNavigate } from "react-router-dom";
import Skills from "../molecules/Skills";
import { ButtonAction } from "../atoms/ButtonAction";

export const SectionSkill = () => {
  //   const navigate = useNavigate();
  return (
    <section className="mx-auto flex w-full flex-col gap-8">
      <h3 className="text-center text-2xl font-semibold">
        Competenze acquisite
      </h3>
      <div className="flex h-full w-full flex-col flex-wrap gap-8 md:grid md:grid-cols-3">
        <Skills />

        <div className="space-y-4 md:col-start-2">
          <p className="text-center">Guarda i miei lavori</p>
          {/* Qui sarebbe bello mostrare gli ultimi lavori, massimo due o tre */}
          <ButtonAction navigateTo="projects" buttonClass="w-full">
            Portfolio
          </ButtonAction>
          {/* <Button
            variant={"secondary"}
            size="lg"
            className="w-full gap-2"
            onClick={() => navigate("/projects")}
          >
            <GoProjectRoadmap /> Portfolio
          </Button> */}
        </div>
      </div>
    </section>
  );
};
