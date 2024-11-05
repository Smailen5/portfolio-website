import { useState } from "react";
import { ButtonsProject } from "../molecules/ButtonsProject";
import { ContainerProject } from "../molecules/ContainerProject";
import { PictureProject } from "../molecules/PictureProject";
import Skeleton from "react-loading-skeleton";

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
  const [imgLoad, setImgLoad] = useState(false);
  return (
    <>
      {/* PROGETTO SINGOLO */}
      <article className="flex flex-col gap-4 rounded-md border border-border bg-background text-foreground shadow-md">
        {/* Skeleton immagine */}
        {!imgLoad && <Skeleton height={250} />}
        {/* immagine */}
        <PictureProject
          linkSite={html_url}
          image={image}
          name={name}
          onLoad={() => setImgLoad(true)}
        />
        {/* contenitore nome progetto e descrizione */}
        <ContainerProject name={name} technologies={technologies}>
          <ButtonsProject nome={name} />
        </ContainerProject>
      </article>
    </>
  );
};
