import { SkillCard } from './SkillCard';
// import { SkillCategory } from './SkillCategory';
import { framework, language, utility } from '@/data/skillsData';

export const SkillsCarousel = () => {
  const allSkills = [...language, ...framework, ...utility];
  const duplicatedSkills = [...allSkills, ...allSkills];
  return (
    <>
      <div className="mx-auto w-full overflow-hidden md:max-w-[976px]">
        <div className="animate-scroll flex gap-4">
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className="w-[70px] flex-shrink-0">
              <SkillCard name={skill.name} icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
