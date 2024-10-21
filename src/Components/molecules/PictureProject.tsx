// import { images } from "../../data/images";
import { useState } from "react";
import { LinkBlank } from "../atoms/LinkBlank";
import { nameCorrect } from "@/utils/nameCorrect";

type PictureProject = {
  linkSite: string;
  image?: string;
  name:string;
};

export const PictureProject: React.FC<PictureProject> = ({
  linkSite,
  image,
  name
}) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  // Se non ho ancora caricato l'immagine
  if (error) {
    return (
      <div className="flex h-44 w-full items-center justify-center rounded-md bg-gray-200">
        <p>Immagine non ancora disponibile</p>
      </div>
    );
  }

  return (
    <picture className="overflow-hidden rounded-md">
      <source media="(1024px)" srcSet={image} />
      <LinkBlank href={linkSite}>
        <img
          loading="lazy"
          src={image}
          onError={handleError}
          // forse conviene dare una misura fissa a tutte le immagini per evitare dimensioni diverse es.`lg:w-[480px] lg:h-[300px]`
          className="shadow-lg transition-all duration-500 lg:hover:scale-110"
          alt={`${nameCorrect(name)}`}
        />
      </LinkBlank>
    </picture>
  );
};
