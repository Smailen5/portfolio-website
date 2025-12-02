interface SkillCardProps {
  name: string;
  icon: string;
  carousel?: boolean;
}

/**
 * Componente SkillCard - Singola skill/tecnologia
 *
 * Visualizza una competenza tecnica con icona
 *
 * Layout responsive:
 * - Mobile: Nome + Icona affiancati
 * - Desktop: Solo icona con tooltip al hover (nome nascosto)
 *
 * @param {string} name - Nome della tecnologia (es: "React", "TypeScript")
 * @param {string} icon - URL dell'icona SVG/PNG della tecnologia
 */
export const SkillCard = ({ name, icon, carousel }: SkillCardProps) => {
  // Dimensione fissa per le icone
  const iconSize = 'w-12 h-12';

  if (carousel) {
    return (
      <div className="shadow-dark bg-base-300 rounded-md p-2 shadow-md">
        <img src={icon} alt={name + 'icon'} className={`${iconSize}`} />
      </div>
    );
  }

  return (
    <li
      className="lg:tooltip bg-base-300 mb-4 flex items-center justify-between rounded-md p-2 shadow-md lg:cursor-pointer"
      data-tip={name}
    >
      <p className="text-primary font-semibold uppercase md:hidden">{name}</p>
      <img src={icon} alt={name + 'icon'} className={`${iconSize}`} />
    </li>
  );
};
