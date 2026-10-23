import { BentoCard } from './BentoCard';

interface HomelabCardProps {
  className?: string;
}

export const HomelabCard = ({ className }: HomelabCardProps) => (
  <BentoCard id="homelab-card" title="Homelab" className={className}>
    <p>
      Contenuto di test per homelab card. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Ipsum iure ad libero, aut assumenda, dolor corrupti
      soluta atque accusantium praesentium optio aspernatur consectetur.
    </p>
  </BentoCard>
);
