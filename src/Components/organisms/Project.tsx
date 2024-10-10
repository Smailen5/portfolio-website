import { Button } from "@nextui-org/react";
import { images } from "../../data/images";

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
  // Bottoni per aprire il progetto o github
  const Buttons = (
    <div className="space-x-8">
      <Button color="primary" variant="bordered">
        <a href={liveSite} target="_blank" rel="noopener noreferrer">
          guarda ora
        </a>
      </Button>
      <Button color="primary" variant="bordered">
        <a href={github} target="_blank" rel="noopener noreferrer">
          codice
        </a>
      </Button>
    </div>
  );

  return (
    <>
      {/* PROGETTO SINGOLO */}
      <div className="flex flex-col gap-4 rounded-md bg-white shadow-md">
        {/* immagine */}
        <picture>
          <source media="(1024px)" srcSet={images[imageKey].large} />
          <a href={liveSite} target="_blank" rel="noopener noreferrer">
            <img
              loading="lazy"
              src={images[imageKey].small}
              // forse conviene dare una misura fissa a tutte le immagini per evitare dimensioni diverse es.`lg:w-[480px] lg:h-[300px]`
              className="rounded-md shadow-lg lg:hover:animate-pulse"
            />
          </a>
        </picture>
        {/* contenitore nome progetto e descrizione */}
        <div className="flex flex-1 flex-col justify-between gap-2 p-4 text-left">
          <h3 className="text-2xl font-bold uppercase">{title}</h3>
          {/* array delle tecnologie utilizzate */}
          {/* <p>Fatto con: </p> */}
          <div className="flex flex-wrap gap-4 uppercase">
            {technologies.map((tech) => {
              return (
                <h4 key={tech} className="font-semibold">
                  {tech}
                </h4>
              );
            })}
          </div>
          {Buttons}
        </div>
      </div>
    </>
  );
};

export default Project;
