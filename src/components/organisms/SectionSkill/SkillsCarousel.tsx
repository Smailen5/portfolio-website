import { H2 } from '@/components/atoms/heading';
import { framework, language, utility } from '@/data/skillsData';
import { SkillCard } from './SkillCard';

/**
 * Componente SkillsCarousel - Carosello infinito delle tecnologie
 *
 * Visualizza tutte le skill (linguaggi, framework, utility) in un carosello
 * che scorre continuamente da destra verso sinistra.
 *
 * Features:
 * - Animazione CSS infinita (scroll continuo)
 * - Duplicazione delle skill per effetto seamless
 * - Solo icone (modalità carousel), senza tooltip o nomi
 * - Titolo centrato "Le tecnologie che uso"
 *
 * Layout responsive:
 * - Mobile: Larghezza piena, scroll orizzontale nascosto
 * - Desktop: Larghezza massima 976px, allineato al contenuto della pagina
 *
 * Note tecniche:
 * - Utilizza SkillCard con prop `carousel={true}` per visualizzare solo l'icona
 * - Le skill vengono duplicate per creare l'effetto di scroll infinito
 * - Animazione definita in `app.css` con classe `.animate-scroll`
 */

export const SkillsCarousel = () => {
  const allSkills = [...language, ...framework, ...utility];
  const duplicatedSkills = [...allSkills, ...allSkills];
  return (
    <>
      <H2 textCenter>Le tecnologie che uso</H2>

      <div className="mx-auto w-full overflow-x-hidden md:max-w-[976px]">
        <div className="animate-scroll inline-flex">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="mr-4 w-[70px] flex-shrink-0"
            >
              <SkillCard name={skill.name} icon={skill.icon} carousel />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
