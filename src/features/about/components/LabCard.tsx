import { BentoCard } from './BentoCard';
import { labItems } from '@/data/about';

interface LabCardProps {
  className?: string;
}

export const LabCard = ({ className }: LabCardProps) => (
  <BentoCard id="lab-card" title="Lab R&D" className={className}>
    <ul className="space-y-3">
      {labItems.map(item => {
        return (
          <li key={item.title}>
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="text-base-content/70 mt-1 text-sm leading-relaxed">
              {item.description}
            </p>
          </li>
        );
      })}
    </ul>
  </BentoCard>
);
