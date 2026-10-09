import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CardSkeleton = () => {
  return (
    <SkeletonTheme
      baseColor="var(--color-base-200)"
      highlightColor="var(--color-base-300)"
    >
      <article className="card bg-base-300 w-full rounded-lg shadow-sm">
        {/* Anteprima progetto */}
        <div className="p-4">
          <div className="border-primary/40 aspect-video w-full overflow-hidden rounded-lg border">
            <Skeleton
              borderRadius={0}
              containerClassName="block h-full"
              height="100%"
            />
          </div>
        </div>
        <div className="card-body gap-4 p-4 pt-0">
          {/* Titolo e descrizione */}
          <div className="space-y-1">
            <Skeleton width="60%" height={20} />
            <Skeleton count={2} />
          </div>

          {/* Tecnologie */}
          <ul className="flex flex-wrap gap-2">
            <Skeleton borderRadius={6} width={72} height={18} />
            <Skeleton borderRadius={6} width={96} height={18} />
            <Skeleton borderRadius={6} width={64} height={18} />
            <Skeleton borderRadius={6} width={88} height={18} />
          </ul>

          {/* Pulsanti */}
          <div className="grid grid-cols-2 gap-2">
            <Skeleton width="100%" borderRadius={6} height={40} />
            <Skeleton width="100%" borderRadius={6} height={40} />
          </div>
        </div>
      </article>
    </SkeletonTheme>
  );
};
