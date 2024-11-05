import { LinkBlank } from "../atoms/LinkBlank";
import { nameCorrect } from "@/utils/nameCorrect";

type PictureProject = {
  linkSite: string;
  image?: string;
  name: string;
  onLoad: () => void;
  onError: () => void;
  imageLoadFailed?: boolean;
};

export const PictureProject: React.FC<PictureProject> = ({
  linkSite,
  image,
  name,
  onLoad,
  onError,
  imageLoadFailed,
}) => {
  // Se non ho ancora caricato l'immagine del progetto
  if (imageLoadFailed) {
    return (
      <div className="flex h-full min-h-[195px] w-full items-center justify-center rounded-md bg-muted text-muted-foreground md:min-h-[300px]">
        <p>Immagine non ancora disponibile</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md">
      <LinkBlank href={linkSite}>
        <img
          loading="lazy"
          src={image}
          onError={onError}
          onLoad={onLoad}
          // forse conviene dare una misura fissa a tutte le immagini per evitare dimensioni diverse es.`lg:w-[480px] lg:h-[300px]`
          className="object-cover shadow-lg transition-all duration-500 lg:hover:scale-110"
          alt={`Anteprima del progetto ${nameCorrect(name)}`}
        />
      </LinkBlank>
    </div>
  );
};
