import { SkillCard } from './SkillCard';
// import { SkillCategory } from './SkillCategory';
import { H2 } from '@/components/atoms/heading';
import { framework, language, utility } from '@/data/skillsData';

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
