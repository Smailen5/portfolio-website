import { images } from "../../data/images";
import { LinkBlank } from "../atoms/LinkBlank";

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
    <picture className="overflow-hidden rounded-md">
      <source media="(1024px)" srcSet={image.large} />
      <LinkBlank href={linkSite}>
        <img
          loading="lazy"
          src={image.small}
          // forse conviene dare una misura fissa a tutte le immagini per evitare dimensioni diverse es.`lg:w-[480px] lg:h-[300px]`
          className="shadow-lg transition-all duration-500 lg:hover:scale-110"
        />
      </LinkBlank>
    </picture>
  );
};
