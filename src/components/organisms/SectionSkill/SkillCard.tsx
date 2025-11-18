interface SkillCardProps {
  name: string;
  icon: string;
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
export const SkillCard = ({ name, icon }: SkillCardProps) => {
  // Dimensione fissa per le icone
  const iconSize = 'w-12 h-12';

  return (
    <li
      className="border-accent text-accent-content lg:tooltip mb-4 flex items-center justify-between rounded-md border-2 p-2 lg:cursor-pointer"
      data-tip={name}
    >
      <p className="text-primary font-semibold uppercase md:hidden">{name}</p>
      <img src={icon} alt={name + 'icon'} className={`${iconSize}`} />
    </li>
  );
};
