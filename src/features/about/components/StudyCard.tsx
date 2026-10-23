import { BentoCard } from './BentoCard';

interface StudyCardProps {
  className?: string;
}

export const StudyCard = ({ className }: StudyCardProps) => (
  <BentoCard id="study-card" title="Studio" className={className}>
    <p>
      Contenuto di test per study card. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Ad eveniet porro nisi, illum at commodi? Doloremque
      deleniti ratione quasi quibusdam obcaecati totam. Explicabo vitae
      voluptatem, reiciendis necessitatibus ducimus non debitis?
    </p>
  </BentoCard>
);
