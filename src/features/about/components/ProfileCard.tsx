import { BentoCard } from './BentoCard';
import { profile } from '@/data/about';
import { renderBold } from '@/shared/utils/renderBold';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => (
  <BentoCard id="profile" title="Profilo" className={className}>
    <div className="flow-root">
      <div className="border-primary/50 float-left mr-4 mb-2 rounded-lg border p-1">
        <img
          src={profile.photo.src}
          alt={profile.photo.alt}
          className="size-24 rounded-md object-cover sm:size-28"
        />
      </div>
      <div className="space-y-3">
        {profile.paragraphs.map((para, index) => (
          <p
            key={index}
            className="text-base-content/70 text-sm leading-relaxed"
          >
            {renderBold(para)}
          </p>
        ))}
      </div>
    </div>
  </BentoCard>
);
