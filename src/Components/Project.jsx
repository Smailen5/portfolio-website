/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import imag from "../assets/images/base-apparel-desktop.jpeg";
import { Button } from "@nextui-org/react";
import images from "../data/images";

const Project = ({ imageKey, title, technologies, liveSite, github }) => {
  // Bottoni per aprire il progetto o github
  const Buttons = (
    <div className="space-x-8">
      <Button color="primary" variant="bordered">
        <a href={liveSite} target="_blank">
          guarda ora
        </a>
      </Button>
      <Button color="primary" variant="bordered">
        <a href={github} target="_blank">
          codice
        </a>
      </Button>
    </div>
  );

  return (
    <>
      {/* PROGETTO SINGOLO */}
      <div className="bg-white flex flex-col gap-4 rounded-md shadow-md">
        {/* immagine */}
        <picture>
          <source media="(1024px)" srcSet={images[imageKey].large} />
          <a href={liveSite} target="_blank" rel="noopener noreferrer">
            <img
              loading="lazy"
              src={images[imageKey].small}
              className="rounded-md shadow-lg lg:hover:animate-pulse"
            />
          </a>
        </picture>
        {/* contenitore nome progetto e descrizione */}
        <div className="flex flex-1 flex-col gap-2 p-4 text-left">
          <h3 className="text-2xl font-bold uppercase">{title}</h3>
          {/* array delle tecnologie utilizzate */}
          <p>Fatto con: </p>
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
