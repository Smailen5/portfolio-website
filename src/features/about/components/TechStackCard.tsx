import { BentoCard } from './BentoCard';

interface TechStackCardProps {
  className?: string;
}

export const TechStackCard = ({ className }: TechStackCardProps) => (
  <BentoCard id="tech-stack" title="Tech Stack" className={className}>
    <p>
      Contenuto di test per tech stack. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Obcaecati consequatur ratione veritatis, perspiciatis
      aperiam enim quo fugiat esse rem maiores. Perferendis error quae commodi
      inventore delectus soluta fuga ab facere?
    </p>
  </BentoCard>
);
