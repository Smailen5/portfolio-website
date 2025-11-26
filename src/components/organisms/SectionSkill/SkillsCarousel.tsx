import { SkillCard } from './SkillCard';
// import { SkillCategory } from './SkillCategory';
import { framework, language, utility } from '@/data/skillsData';
import { H2 } from '@/components/atoms/heading';

export const SkillsCarousel = () => {
  const allSkills = [...language, ...framework, ...utility];
  const duplicatedSkills = [...allSkills, ...allSkills];
  return (
    <>
      <H2>Le tecnologie che uso</H2>

      <div className="mx-auto w-full overflow-hidden md:max-w-[976px]">
        <div className="animate-scroll flex">
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className="mr-4 w-[70px] flex-shrink-0">
              <SkillCard name={skill.name} icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
