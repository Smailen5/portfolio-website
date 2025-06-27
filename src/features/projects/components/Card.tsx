import { ButtonsProject } from "@/features/projects/components/Buttons";
import { ContainerProject } from "@/features/projects/components/Container";
import { PictureProject } from "@/features/projects/components/Picture";
import { CardProjectProps } from "@/shared/types/projects";

export const CardProject: React.FC<CardProjectProps> = ({
  name,
  description,
  technologies,
  imageUrl,
}) => {

  return (
    <>
      {/* PROGETTO SINGOLO */}
      <article className="flex flex-col rounded-md border border-border bg-background text-foreground shadow-md overflow-hidden max-h-[640px]">

        {/* immagine */}
        <PictureProject
          image={imageUrl}
          name={name}
        />
        {/* contenitore nome progetto e descrizione */}
        <ContainerProject name={name} technologies={technologies} description={description}>
          <ButtonsProject nome={name} />
        </ContainerProject>
      </article>
    </>
  );
};
