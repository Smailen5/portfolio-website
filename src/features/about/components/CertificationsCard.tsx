import { BentoCard } from './BentoCard';
import { certifications } from '@/data/about';

interface CertificationsCardProps {
  className?: string;
}

export const CertificationsCard = ({ className }: CertificationsCardProps) => {
  const { name, issuer, badge, topics, credentialUrl } = certifications[1];
  return (
    <BentoCard
      id="certification-card"
      title="Certification"
      className={className}
    >
      <h3>{name}</h3>
      {/* Nel caso dimentichi di aggiungere una immagine per la certificazione non mostra l'immagine rotta */}
      {badge && <img src={badge?.src} alt={badge?.alt} className="size-16" />}
      <p>{issuer}</p>
      <ul>
        {topics.map((a, index) => (
          <li key={index}>{a}</li>
        ))}
      </ul>
      <a href={credentialUrl} target="_blank" rel="noopener noreferrer">
        Verifica certificato
      </a>
    </BentoCard>
  );
};
