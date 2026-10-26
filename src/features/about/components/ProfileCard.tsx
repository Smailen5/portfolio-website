import { BentoCard } from './BentoCard';
import { profile } from '@/data/about';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => (
  <BentoCard id="profile" title="Chi Sono" className={className}>
    {profile.paragraphs.map((para, index) => (
      <p key={index}>{para}</p>
    ))}
  </BentoCard>
);
