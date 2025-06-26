import { LinkBlank } from '@/components/atoms/LinkBlank';
import { nameCorrect } from "@/shared/utils/nameCorrect";

type PictureProject = {
  image: string | null;
  name: string;
};

export const PictureProject: React.FC<PictureProject> = ({
  image,
  name,
}) => {
  // Se l'immagine non è disponibile, mostro un messaggio
  if (image === null) {
    return (
      <div className="flex h-full min-h-[195px] w-full items-center justify-center rounded-md bg-muted text-center text-muted-foreground md:min-h-[300px]">
        <p>
          Immagine non ancora disponibile per <br />
          {nameCorrect(name)}
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md">
      <LinkBlank href={`projects/${name}`}>
        <img
        loading="lazy"
        src={image}
        // forse conviene dare una misura fissa a tutte le immagini per evitare dimensioni diverse es.`lg:w-[480px] lg:h-[300px]`
        className="object-cover shadow-lg transition-all duration-500 md:hover:scale-110"
        alt={`Anteprima del progetto ${nameCorrect(name)}`}
        />
        </LinkBlank>
    </div>
  );
};
