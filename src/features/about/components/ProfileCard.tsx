import { BentoCard } from './BentoCard';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => (
  <BentoCard id="Profile" title="Profile" className={className}>
    <p>
      Contenuto di test per profile. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Nobis amet iste sunt officia, cumque voluptate nesciunt
      perspiciatis odio deleniti similique odit in tempora alias totam illo!
      Reprehenderit voluptates consequuntur veniam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia
      consequuntur distinctio quia perspiciatis repellat provident, beatae
      quisquam alias quibusdam. Facilis officiis adipisci ullam natus, totam
      sunt numquam consectetur omnis?
    </p>
  </BentoCard>
);
