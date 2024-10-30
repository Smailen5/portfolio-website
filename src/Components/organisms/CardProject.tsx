import { ButtonsProject } from "../molecules/ButtonsProject";
import { ContainerProject } from "../molecules/ContainerProject";
import { PictureProject } from "../molecules/PictureProject";

interface CardProjectType {
  name: string;
  // path: string;
  html_url: string;
  image: string;
  technologies: string[];
}

export const CardProject: React.FC<CardProjectType> = ({
  name,
  html_url,
  image,
  technologies,
}) => {
  return (
    <>
      {/* PROGETTO SINGOLO */}
      <article className="flex flex-col gap-4 rounded-md border border-border bg-background text-foreground shadow-md">
        {/* immagine */}
        <PictureProject linkSite={html_url} image={image} name={name} />
        {/* contenitore nome progetto e descrizione */}
        <ContainerProject name={name} technologies={technologies}>
          <ButtonsProject nome={name} />
        </ContainerProject>
      </article>
    </>
  );
};
