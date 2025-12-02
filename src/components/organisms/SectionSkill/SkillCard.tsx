interface SkillCardProps {
  name: string;
  icon: string;
  carousel?: boolean;
}

/**
 * Componente SkillCard - Singola skill/tecnologia
 *
 * Visualizza una competenza tecnica con icona. Supporta due modalità:
 * - Normale: Lista con nome visibile su mobile e tooltip su desktop
 * - Carousel: Solo icona, senza tooltip e senza nome (per caroselli)
 *
 * Layout responsive (modalità normale):
 * - Mobile: Nome + Icona affiancati
 * - Desktop: Solo icona con tooltip al hover (nome nascosto)
 *
 * Modalità carousel:
 * - Solo icona con sfondo e ombra
 * - Nessun tooltip o nome visibile
 * - Utilizzato in SkillsCarousel per scroll infinito
 *
 * @param {string} name - Nome della tecnologia (es: "React", "TypeScript")
 * @param {string} icon - URL dell'icona SVG/PNG della tecnologia
 * @param {boolean} [carousel] - Se true, mostra solo icona senza tooltip/nome
 */
export const SkillCard = ({ name, icon, carousel }: SkillCardProps) => {
  // Dimensione fissa per le icone
  const iconSize = 'w-12 h-12';

  if (carousel) {
    return (
      <div className="bg-base-300 rounded-md p-2 shadow-md">
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
