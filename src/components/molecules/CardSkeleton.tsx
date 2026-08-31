import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CardSkeleton = () => {
  return (
    <article className="card bg-base-300 w-full shadow-sm">
      {/* Immagine Progetto */}
      <figure>
        <div className="w-full leading-none">
          <Skeleton borderRadius={0} height={200} />
        </div>
      </figure>
      <div className="card-body gap-4">
        {/* Titolo Progetto */}
        <h3>
          <Skeleton height={25} />
        </h3>

        {/* Descrizione paragrafo */}
        <p>
          <Skeleton count={3} />
        </p>

        {/* Sezione tecnologie */}
        <ul className="flex flex-wrap gap-2 uppercase">
          <Skeleton borderRadius={32} width={40} height={25} />
          <Skeleton borderRadius={32} width={70} height={25} />
          <Skeleton borderRadius={32} width={50} height={25} />
          <Skeleton borderRadius={32} width={30} height={25} />
        </ul>

        {/* Bottone Dettagli */}

        <Skeleton borderRadius={32} className="btn btn-xl" />
      </div>
    </article>
  );
};
