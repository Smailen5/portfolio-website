import { ButtonsProject } from "../molecules/ButtonsProject";
import { ContainerProject } from "../molecules/ContainerProject";
import { PictureProject } from "../molecules/PictureProject";

type ProjectType = {
  imageKey: string;
  title: string;
  technologies: string[];
  liveSite: string;
  github: string;
};

const Project: React.FC<ProjectType> = ({
  imageKey,
  title,
  technologies,
  liveSite,
  github,
}) => {
  return (
    <>
      {/* PROGETTO SINGOLO */}
      <div className="flex flex-col gap-4 rounded-md bg-white shadow-md">
        {/* immagine */}
        <PictureProject linkSite={liveSite} imageKey={imageKey} />
        {/* contenitore nome progetto e descrizione */}
        <ContainerProject title={title} technologies={technologies}>
          <ButtonsProject linkSite={liveSite} linkRepo={github} />
        </ContainerProject>
      </div>
    </>
  );
};

export default Project;
