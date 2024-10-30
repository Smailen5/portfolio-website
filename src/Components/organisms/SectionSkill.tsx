import { ButtonAction } from "../atoms/ButtonAction";
import Skills from "../molecules/Skills";

export const SectionSkill = () => {
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
        </div>
      </div>
    </section>
  );
};
