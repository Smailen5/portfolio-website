import { images } from "../../data/images";

type PictureProject = {
  linkSite: string;
  imageKey: string;
};

export const PictureProject: React.FC<PictureProject> = ({
  linkSite,
  imageKey,
}) => {
  const image = images[imageKey];

  if (!image) {
    console.error(`La chiave ${imageKey} non e stata trovata`);
    return null;
  }

  return (
    <picture>
      <source media="(1024px)" srcSet={image.large} />
      <a href={linkSite} target="_blank" rel="noopener noreferrer">
        <img
          loading="lazy"
          src={image.small}
          // forse conviene dare una misura fissa a tutte le immagini per evitare dimensioni diverse es.`lg:w-[480px] lg:h-[300px]`
          className="rounded-md shadow-lg lg:hover:animate-pulse"
        />
      </a>
    </picture>
  );
};
