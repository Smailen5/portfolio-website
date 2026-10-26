import { BentoCard } from './BentoCard';
import { techGroups } from '@/data/about';
import { TECH_ICONS } from '@/data/techIcons';

interface TechStackCardProps {
  className?: string;
}

export const TechStackCard = ({ className }: TechStackCardProps) => (
  <BentoCard id="tech-stack" title="Tech Stack" className={className}>
    <div className="space-y-4">
      {techGroups.map(group => (
        <div key={group.title}>
          <h3 className="text-sm font-semibold">{group.title}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map(item => {
              const icon = TECH_ICONS[item];
              return (
                <li
                  key={item}
                  className="border-primary/30 bg-base-200/60 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium"
                >
                  {icon && <img src={icon} alt="" className="size-3.5" />}
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  </BentoCard>
);
