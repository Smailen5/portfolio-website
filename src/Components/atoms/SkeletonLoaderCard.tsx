import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonLoaderCard = () => {
  return (
    <article
      className="space-y-4 rounded-md bg-gray-50 p-4"
      aria-label="Caricamento contenuto"
    >
      {/* immagine */}
      <Skeleton height={200} />
      <main>
        {/* nome progetto */}
        <h3>
          <Skeleton height={40} />
        </h3>
        {/* tecnologie */}
        <span>
          <Skeleton height={30} width={"50%"} />
        </span>
        {/* bottone */}
        <div>
          <Skeleton height={40} width={"30%"} />
        </div>
      </main>
    </article>
  );
};
