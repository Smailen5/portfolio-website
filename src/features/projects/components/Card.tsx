import { ENDPOINTS } from '@/shared/constants/api';
import { CardProjectProps } from '@/shared/types/projects';
import { nameCorrect } from '@/shared/utils/nameCorrect';
import { useMemo } from 'react';

/**
 * Componente CardProject - Card per visualizzare un singolo progetto
 *
 * Mostra:
 * - Immagine di anteprima (cliccabile → GitHub README)
 * - Nome progetto (formattato con nameCorrect)
 * - Descrizione breve
 * - Lista tecnologie utilizzate (badge ordinati alfabeticamente)
 * - Bottone "Dettagli" → GitHub README completo
 *
 * @param {CardProjectProps} props - Dati del progetto da visualizzare
 */
export const CardProject = ({
  name,
  description,
  technologies,
  imageUrl,
  nameFolder,
}: CardProjectProps) => {
  const sortedTechnologies = useMemo(() => {
    if (!technologies) return [];
    return [...technologies].sort((a, b) => a.localeCompare(b));
  }, [technologies]);

  const projectUrl = `${ENDPOINTS.GITHUB.README.FOLDER}${nameFolder}`;
  const formattedName = nameCorrect(name);

  return (
    //* PROGETTO SINGOLO */
    <article className="card bg-base-300 w-full shadow-sm">
      <figure>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visualizza il progetto ${formattedName} su GitHub`}
        >
          <img
            src={imageUrl ?? ''}
            alt={`Screenshot del progetto ${formattedName}`}
            className="transition-all duration-300 lg:hover:scale-105"
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

        <div className="flex justify-center">
          <a
            href={projectUrl}
            className="btn btn-primary btn-xl md:btn-lg w-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visualizza i dettagli di ${formattedName} su GitHub`}
          >
            Dettagli
          </a>
        </div>
      </div>
    </article>
  );
};
