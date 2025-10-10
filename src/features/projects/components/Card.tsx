import { CardProjectProps } from "@/shared/types/projects";
import { nameCorrect } from "@/shared/utils/nameCorrect";
import { ENDPOINTS } from "@/shared/constants/api";

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
      <article className="card bg-base-100 w-full shadow-sm" key={name}>
        <figure>
          <a href={`${ENDPOINTS.GITHUB.README.FOLDER}${nameFolder}`} target="_blank" rel="noopener noreferrer">
            <img src={imageUrl || ""} alt={`Screenshot del progetto ${nameCorrect(name)}`} />
          </a>
        </figure>
        <div className="card-body">
          <h3 className="card-title uppercase">{nameCorrect(name)}</h3>
          <p>{description}</p>

          {/* array delle tecnologie utilizzate */}
          <ul className="flex flex-wrap gap-2 uppercase">
            {!technologies ? (
              <p>Tecnologie non disponibili</p>
            ) : (
              [...technologies]
                .sort((a, b) => a.localeCompare(b))
                .map((tech) => {
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
            <a href={`${ENDPOINTS.GITHUB.README.FOLDER}${nameFolder}`} className="btn btn-primary btn-wide" target="_blank" rel="noopener noreferrer" >
            Dettagli</a>
          </div>
        </div>
      </article>
    </>
  );
};
