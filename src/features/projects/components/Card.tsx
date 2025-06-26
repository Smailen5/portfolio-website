import { ButtonsProject } from "@/features/projects/components/Buttons";
import { ContainerProject } from "@/features/projects/components/Container";
import { PictureProject } from "@/features/projects/components/Picture";
import { Project } from "@/shared/types/projects";

export const CardProject: React.FC<Project> = ({
  name,
  description,
  technologies,
  createdAt,
  imageUrl,
  readmeUrl,
  version,
}) => {

  const nonUtilizzato = { description, createdAt, version }
  console.log(nonUtilizzato)

  return (
    <>
      {/* PROGETTO SINGOLO */}
      <article className="flex flex-col gap-4 rounded-md border border-border bg-background text-foreground shadow-md">

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
