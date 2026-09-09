import { social } from '@/data/social';
import { icons } from '@/assets/icons/index';

/**
 * Componente SocialIcons - Lista icone social interattive
 *
 * Mostra le icone dei social media (GitHub, LinkedIn, Frontend Mentor)
 * in un layout flessibile e responsive
 *
 * Effetti hover:
 * - Mobile: icona + nome sempre visibile
 * - Desktop: solo icona, il nome appare al hover con animazione slide
 *
 * @see social - Array con i dati dei social da visualizzare
 */
export const SocialIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {social.map(({ name, link, icon }) => (
        <a
          key={name}
          aria-label={`apri il profilo ${name} di Smailen Vargas`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 hover:space-x-4 lg:space-x-0"
        >
          <img src={icons[icon]} alt="" className="size-5" />
          <span className="max-h-6 overflow-hidden font-semibold uppercase transition-all duration-700 ease-in-out group-hover:max-w-xs lg:max-w-0 lg:opacity-0 group-hover:lg:opacity-100">
            {name}
          </span>
        </a>
      ))}
    </div>
  );
};
