
import { ButtonsProject } from "../molecules/ButtonsProject";
import { ContainerProject } from "../molecules/ContainerProject";
import { PictureProject } from "../molecules/PictureProject";

type ProjectType = {
  name: string;
  // path: string;
  html_url: string;
  image:string;
};

const Project: React.FC<ProjectType> = ({ name, html_url, image }) => {
  return (
    <>
      {/* PROGETTO SINGOLO */}
      <div className="flex flex-col gap-4 rounded-md bg-white shadow-md">
        {/* immagine */}
        <PictureProject linkSite={html_url} image={image} />
        {/* contenitore nome progetto e descrizione */}
        <ContainerProject name={name}>
          <ButtonsProject linkRepo={html_url} />
        </ContainerProject>
      </div>
    </>
  );
};

export default Project;
