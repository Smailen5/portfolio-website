import { images } from "../../data/images";

type PictureProject = {
  linkSite: string;
  key: string;
};

export const PictureProject: React.FC<PictureProject> = ({
  linkSite,
  key,
}) => {
    const image = images[key];

    if (!image) {
      console.error(`La chiave ${key} non e stata trovata`);
      return null;
    }
  
  return (
    <picture>
      <source media="(1024px)" srcSet={images[key].large} />
      <a href={linkSite} target="_blank" rel="noopener noreferrer">
        <img
          loading="lazy"
          src={images[key].small}
          // forse conviene dare una misura fissa a tutte le immagini per evitare dimensioni diverse es.`lg:w-[480px] lg:h-[300px]`
          className="rounded-md shadow-lg lg:hover:animate-pulse"
        />
      </a>
    </picture>
  );
};
