import { BentoCard } from './BentoCard';

interface LabCardProps {
  className?: string;
}

export const LabCard = ({ className }: LabCardProps) => (
  <BentoCard id="lab-card" title="Lab R&D" className={className}>
    <p>
      Contenuto di test per study card. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Ad eveniet porro nisi, illum at commodi? Doloremque
      deleniti ratione quasi quibusdam obcaecati totam. Explicabo vitae
      voluptatem, reiciendis necessitatibus ducimus non debitis?
    </p>
  </BentoCard>
);
