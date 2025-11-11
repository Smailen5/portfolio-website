import { ENDPOINTS } from '@/shared/constants/api';
import { CardProjectProps } from '@/shared/types/projects';
import { nameCorrect } from '@/shared/utils/nameCorrect';

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
export const CardProject: React.FC<CardProjectProps> = ({
  name,
  description,
  technologies,
  imageUrl,
  nameFolder,
}) => {
  return (
    <>
      {/* PROGETTO SINGOLO */}
      <article className="card bg-base-300 w-full shadow-sm" key={name}>
        <figure>
          <a
            href={`${ENDPOINTS.GITHUB.README.FOLDER}${nameFolder}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imageUrl || ''}
              alt={`Screenshot del progetto ${nameCorrect(name)}`}
              className="transition-all duration-300 lg:hover:scale-105"
            />
          </a>
        </figure>
        <div className="card-body gap-4">
          <h3 className="card-title uppercase">{nameCorrect(name)}</h3>
          <p>{description}</p>

          {/* array delle tecnologie utilizzate */}
          <ul className="flex flex-wrap gap-2 uppercase">
            {!technologies ? (
              <p>Tecnologie non disponibili</p>
            ) : (
              [...technologies]
                .sort((a, b) => a.localeCompare(b))
                .map(tech => {
                  return (
                    <li
                      key={tech}
                      className="badge badge-outline text-xs font-semibold md:text-sm"
                    >
                      {tech}
                    </li>
                  );
                })
            )}
          </ul>

          <div className="flex justify-center">
            <a
              href={`${ENDPOINTS.GITHUB.README.FOLDER}${nameFolder}`}
              className="btn btn-primary btn-xl md:btn-lg w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dettagli
            </a>
          </div>
        </div>
      </article>
    </>
  );
};
