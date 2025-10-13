import social from "@/data/social";
import { Icon } from "./Icon";

/**
 * Componente SocialIcons - Lista icone social
 *
 * Mostra le icone dei social media (GitHub, LinkedIn, Frontend Mentor)
 * in un layout flessibile e responsive
 *
 * @see social - Array con i dati dei social da visualizzare
 * @see Icon - Componente singola icona social
 */
const SocialIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {social.map((el, index) => (
        <Icon key={index} {...el} />
      ))}
    </div>
  );
};

export default SocialIcons;
