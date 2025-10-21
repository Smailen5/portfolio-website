import { icons } from '@/assets/icons/index';

type IconType = {
  name: string;
  icon: keyof typeof icons;
  link: string;
};

/**
 * Componente Icon - Singola icona social interattiva
 *
 * Link social con effetto hover che mostra il nome
 *
 * Effetti:
 * - Mobile: Sempre visibile icona + nome
 * - Desktop: Solo icona, nome appare al hover con animazione slide
 * - Transizione smooth per UX piacevole
 *
 * @param {string} name - Nome del social (es: "GitHub")
 * @param {keyof typeof icons} icon - Chiave icona da assets/icons
 * @param {string} link - URL profilo social
 */
export const Icon: React.FC<IconType> = ({ name, icon, link }) => {
  const IconImg = icons[icon];
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 hover:space-x-4 lg:space-x-0"
    >
      <img srcSet={IconImg} alt={name} className="size-5" />
      <span className="max-h-6 overflow-hidden font-semibold uppercase transition-all duration-700 ease-in-out group-hover:max-w-xs lg:max-w-0 lg:opacity-0 group-hover:lg:opacity-100">
        {name}
      </span>
    </a>
  );
};
