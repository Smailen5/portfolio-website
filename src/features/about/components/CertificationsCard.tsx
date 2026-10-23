import { BentoCard } from './BentoCard';

interface CertificationsCardProps {
  className?: string;
}

export const CertificationsCard = ({ className }: CertificationsCardProps) => (
  <BentoCard
    id="certification-card"
    title="Certification"
    className={className}
  >
    <p>
      Contenuto di test per certification. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Accusamus, ab. Distinctio, maxime! Odio
      nulla veniam quibusdam culpa, placeat voluptas atque omnis cum. In
      dignissimos eaque cupiditate facilis culpa praesentium quibusdam.
    </p>
  </BentoCard>
);
