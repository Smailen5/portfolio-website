import { BentoCard } from './BentoCard';
import { certifications } from '@/data/about';

interface CertificationsCardProps {
  className?: string;
}

export const CertificationsCard = ({ className }: CertificationsCardProps) => {
  const { name, issuer, badge, topics, credentialUrl, status } =
    certifications[0];
  return (
    <BentoCard
      id="certification-card"
      title="Certification"
      className={className}
    >
      <div className="flex items-start gap-3">
        <h3 className="text-xl font-bold">{name}</h3>
        <p
          className={`badge badge-outline shrink-0 text-xs whitespace-nowrap capitalize ${status === 'conseguita' ? 'border-success/50 text-success' : 'border-warning/50 text-warning'}`}
        >
          {status}
        </p>
      </div>
      <p className="text-base-content/70 mt-1 text-xs">{issuer}</p>
      <div className="mt-4 grid grid-cols-[auto_1fr] items-start gap-4">
        {/* Nel caso dimentichi di aggiungere una immagine per la certificazione non mostra l'immagine rotta */}
        {badge && (
          <img
            src={badge.src}
            alt={badge.alt}
            className="size-20 object-contain"
          />
        )}
        <div>
          <p className="text-sm font-semibold">Syllabus highlights:</p>
          <ul className="mt-1 list-disc space-y-1 pl-4 text-sm">
            {topics.map((a, index) => (
              <li key={index}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link link-primary mt-auto text-sm"
        >
          Verifica certificato
        </a>
      )}
    </BentoCard>
  );
};
