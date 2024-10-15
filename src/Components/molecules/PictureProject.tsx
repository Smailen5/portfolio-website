// import { images } from "../../data/images";
import { LinkBlank } from "../atoms/LinkBlank";

type PictureProject = {
  linkSite: string;
  image?: string;
};

export const PictureProject: React.FC<PictureProject> = ({
  linkSite,
  image,
}) => {
  // const image = images[image];

  if (!image) {
    console.error(
      `L'immagine non e stata trovata per il progetto con il link ${linkSite}`,
    );
    return (
      <div className="flex h-44 rounded-md w-full items-center justify-center bg-gray-200">
        <p>Immagine non disponibile</p>
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
          // forse conviene dare una misura fissa a tutte le immagini per evitare dimensioni diverse es.`lg:w-[480px] lg:h-[300px]`
          className="shadow-lg transition-all duration-500 lg:hover:scale-110"
        />
      </LinkBlank>
    </picture>
  );
};
