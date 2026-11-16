import { BentoCard } from '@/components/molecules';
import { techGroups } from '@/data/about';
import { TECH_ICONS } from '@/data/techIcons';

interface TechStackCardProps {
  className?: string;
}

export const TechStackCard = ({ className }: TechStackCardProps) => (
  <BentoCard title="Tech Stack" className={className}>
    <div className="flex flex-1 flex-col justify-between gap-4">
      {techGroups.map(group => (
        <div key={group.title}>
          <h3 className="text-sm font-semibold">{group.title}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map(item => {
              const icon = TECH_ICONS[item];
              const chip =
                icon.chip === 'light'
                  ? 'bg-base-content ring-base-100/15'
                  : 'bg-base-100 ring-base-content/15';

              return (
                <li
                  key={item}
                  className="border-primary/30 bg-base-200/60 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium"
                >
                  <span
                    className={`inline-flex size-5 items-center justify-center rounded ring-1 ${chip}`}
                  >
                    <img src={icon.src} alt="" className="size-3.5" />
                  </span>
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
