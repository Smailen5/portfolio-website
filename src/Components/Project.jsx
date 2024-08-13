/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import imag from "../assets/images/base-apparel-desktop.jpeg";
import { Button } from "@nextui-org/react";
import images from "../data/images";

const Project = ({ link, title, technologies, liveSite, github }) => {
  return (
    <>
      {/* PROGETTO SINGOLO */}
      <div className="bg-whit flex flex-col gap-4">
        {/* immagine */}
        <img src={images[link].small} className="rounded-md" />
        {/* contenitore nome progetto e descrizione */}
        <div className="flex-1 space-y-2 bg-teal-300 text-left">
          <h3 className="text-2xl">{title}</h3>
          {/* array delle tecnologie utilizzate */}
          <div>tecnologie usate</div>
          <div className="flex flex-wrap gap-4 uppercase">
            {technologies.map((tech) => {
              return <h4 key={tech}>{tech}</h4>;
            })}
          </div>
          <div className="space-x-8">
            <Button>
              <a href={liveSite} target="_blank">
                guarda ora
              </a>
            </Button>
            <Button>
              <a href={github} target="_blank">
                codice
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
