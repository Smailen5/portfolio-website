import { BentoCard } from './BentoCard';
import { profile } from '@/data/about';
import { renderBold } from '@/shared/utils/renderBold';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => (
  <BentoCard id="profile" title="Chi Sono" className={className}>
    {profile.paragraphs.map((para, index) => (
      <p key={index}>{renderBold(para)}</p>
    ))}
  </BentoCard>
);
