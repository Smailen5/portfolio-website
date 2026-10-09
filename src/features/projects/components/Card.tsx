import { API_URL } from '@/shared/constants/api';
import { Project } from '@/shared/types/projects';
import { getLiveUrl } from '@/shared/utils/getLiveUrl';
import { nameCorrect } from '@/shared/utils/nameCorrect';
import { useMemo } from 'react';

/**
 * Componente CardProject - Card per visualizzare un singolo progetto
 *
 * Mostra:
 * - Immagine di anteprima incorniciata (cliccabile → GitHub README)
 * - Nome progetto (formattato con nameCorrect)
 * - Descrizione breve
 * - Lista tecnologie utilizzate (badge ordinati alfabeticamente)
 * - Pulsanti "Live Site" (disabilitato se il link manca) e "GitHub"
 *
 * @param {Project} props - Dati del progetto da visualizzare
 */
export const CardProject = ({
  name,
  description,
  technologies,
  imagesUrl,
  repoUrl,
  readmeContent,
}: Project) => {
  const sortedTechnologies = useMemo(() => {
    if (!technologies) return [];
    return [...technologies].sort((a, b) => a.localeCompare(b));
  }, [technologies]);

  const formattedName = nameCorrect(name);
  const firstImage = imagesUrl[0] ? `${API_URL}${imagesUrl[0]}` : undefined;
  const liveUrl = getLiveUrl(readmeContent);

  return (
    //* PROGETTO SINGOLO */
    <article className="card bg-base-300 w-full shadow-sm">
      <figure className="p-4">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visualizza il progetto ${formattedName} su GitHub`}
          className="border-primary/40 block overflow-hidden rounded-lg border"
        >
          <img
            src={firstImage}
            alt={`Screenshot del progetto ${formattedName}`}
            className="aspect-video w-full object-cover object-top transition-transform duration-300 lg:hover:scale-105"
            loading="lazy"
          />
        </a>
      </figure>
      <div className="card-body gap-4">
        <h3 className="card-title uppercase">{formattedName}</h3>
        <p>{description}</p>

        {/* array delle tecnologie utilizzate */}
        {sortedTechnologies.length > 0 ? (
          <ul className="flex flex-wrap gap-2 uppercase">
            {sortedTechnologies.map(tech => (
              <li
                key={tech}
                className="badge badge-outline text-xs font-semibold md:text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm italic opacity-70">
            Nessuna tecnologia disponibile
          </p>
        )}

        <div className="flex gap-2">
          {liveUrl ? (
            <a
              href={liveUrl}
              className="btn btn-primary flex-1 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Apri il sito live di ${formattedName}`}
            >
              Live Site
            </a>
          ) : (
            <button
              type="button"
              className="btn btn-primary flex-1 rounded-md"
              disabled
              aria-label={`Sito live di ${formattedName} non disponibile`}
            >
              Live Site
            </button>
          )}
          <a
            href={repoUrl}
            className="btn btn-outline btn-primary flex-1 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Apri il repository GitHub di ${formattedName}`}
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};
