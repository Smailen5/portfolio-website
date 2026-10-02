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
 * - Tablet/Desktop: solo icona, il nome appare al hover con animazione slide
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
          className="group bg-accent flex items-center gap-2 rounded-full p-2 transition-all duration-700 md:gap-0 md:hover:gap-3"
        >
          <img src={icons[icon]} alt="" className="size-5" />
          <span className="text-primary-content overflow-hidden leading-none font-semibold whitespace-nowrap uppercase transition-all duration-700 group-hover:max-w-xs md:max-w-0 md:opacity-0 group-hover:md:opacity-100">
            {name}
          </span>
        </a>
      ))}
    </div>
  );
};
