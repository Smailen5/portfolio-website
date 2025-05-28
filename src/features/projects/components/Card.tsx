import { ButtonsProject } from "@/features/projects/components/Buttons";
import { ContainerProject } from "@/features/projects/components/Container";
import { PictureProject } from "@/features/projects/components/Picture";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

interface CardProjectType {
  name: string;
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
  const [imageLoad, setImgLoad] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      {/* PROGETTO SINGOLO */}
      <article className="flex flex-col gap-4 rounded-md border border-border bg-background text-foreground shadow-md">
        {/* Skeleton immagine */}
        {!imageLoad && !error && <Skeleton height={250} />}

        {/* immagine */}
        <PictureProject
          linkSite={html_url}
          image={image}
          name={name}
          onLoad={() => setImgLoad(true)}
          onError={() => setError(true)}
          imageLoadFailed={error}
        />
        {/* contenitore nome progetto e descrizione */}
        <ContainerProject name={name} technologies={technologies}>
          <ButtonsProject nome={name} />
        </ContainerProject>
      </article>
    </>
  );
};
