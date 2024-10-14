import { ButtonsProject } from "../molecules/ButtonsProject";
import { ContainerProject } from "../molecules/ContainerProject";
// import { PictureProject } from "../molecules/PictureProject";

type ProjectType = {
  name: string;
  path: string;
  html_url: string;
};

const Project: React.FC<ProjectType> = ({ name, path, html_url }) => {
  return (
    <>
      {/* PROGETTO SINGOLO */}
      <div className="flex flex-col gap-4 rounded-md bg-white shadow-md">
        {/* immagine */}
        {/* <PictureProject linkSite={liveSite} imageKey={imageKey} /> */}
        {/* contenitore nome progetto e descrizione */}
        <ContainerProject name={name}>
          <ButtonsProject linkSite={path} linkRepo={html_url} />
        </ContainerProject>
      </div>
    </>
  );
};

export default Project;
