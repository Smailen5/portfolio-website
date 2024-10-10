import { images } from "../../data/images";
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
  const image = images[imageKey];

  if (!image) {
    console.error(`La chiave ${imageKey} non e stata trovata`);
    return null;
  }

  return (
    <>
      {/* PROGETTO SINGOLO */}
      <div className="flex flex-col gap-4 rounded-md bg-white shadow-md">
      <PictureProject linkSite={liveSite} key={imageKey} />
        {/* immagine */}
        {/* <picture>
          <source media="(1024px)" srcSet={images[imageKey].large} />
          <a href={liveSite} target="_blank" rel="noopener noreferrer">
            <img
              loading="lazy"
              src={images[imageKey].small}
              // forse conviene dare una misura fissa a tutte le immagini per evitare dimensioni diverse es.`lg:w-[480px] lg:h-[300px]`
              className="rounded-md shadow-lg lg:hover:animate-pulse"
            />
          </a>
        </picture> */}
        {/* contenitore nome progetto e descrizione */}
        <ContainerProject title={title} technologies={technologies}>
          <ButtonsProject linkSite={liveSite} linkRepo={github} />
        </ContainerProject>
      </div>
    </>
  );
};

export default Project;
