import { BentoCard } from './BentoCard';
import { homelabSystems } from '@/data/about';

interface HomelabCardProps {
  className?: string;
}

export const HomelabCard = ({ className }: HomelabCardProps) => {
  const { title, image, facts } = homelabSystems[0];
  return (
    <BentoCard
      id="homelab-card"
      title="Homelab & Infrastruttura"
      className={className}
    >
      <div className="flex items-center gap-3">
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            className="size-20 object-contain"
          />
        )}
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {facts.map(item => (
          <li key={item.label}>
            <span className="font-semibold">{item.label}: </span>
            <span className="text-base-content/70">{item.value}</span>
          </li>
        ))}
      </ul>
    </BentoCard>
  );
};
