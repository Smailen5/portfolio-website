import { ContactCard, Layout } from '@/components/molecules';
import { CopyEmailButton } from '@/components/atoms';
import { CURRICULUM_FILES } from '@/data/curriculum';
import { SOCIAL_PROFILES } from '@/data/social';

const EMAIL = 'job@smailenvargas.com';
const MAILTO_URL = `mailto:${EMAIL}?subject=42-website-contact`;

export function ContactPage() {
  return (
    <Layout classContent="px-4 lg:px-0 py-10">
      <header className="mt-4">
        <h1>Mettiamoci in Contatto</h1>
        <p className="text-base-content/70 mt-2 max-w-2xl">
          Aperto a collaborazioni creative, discussioni tecniche e nuovi
          progetti. Scrivimi direttamente, rispondo solitamente entro 48 ore.
        </p>
      </header>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <ContactCard
          id="contact-email"
          title="Email Diretta"
          description={
            <a href={MAILTO_URL} className="link link-primary font-semibold">
              {EMAIL}
            </a>
          }
        >
          <CopyEmailButton email={EMAIL} />
        </ContactCard>

        <ContactCard
          id="contact-linkedin"
          title={SOCIAL_PROFILES.linkedin.name}
          description="Profilo professionale con esperienze, competenze e certificazioni."
        >
          <a
            href={SOCIAL_PROFILES.linkedin.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connettiti al profilo LinkedIn di Smailen Vargas"
            className="btn btn-outline btn-primary rounded-md"
          >
            Connettiti
          </a>
        </ContactCard>

        <ContactCard
          id="contact-github"
          title={SOCIAL_PROFILES.github.name}
          description="Attività open source, progetti personali e codice dei siti che costruisco."
        >
          <a
            href={SOCIAL_PROFILES.github.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Esplora Profilo GitHub di Smailen Vargas"
            className="btn btn-outline btn-primary rounded-md"
          >
            Esplora Profilo
          </a>
        </ContactCard>

        <ContactCard
          id="contact-cv"
          title="Curriculum Vitae"
          description="Aggiornato a ottobre 2026, disponibile in italiano e in inglese."
        >
          {CURRICULUM_FILES.map(({ label, href, fileName }) => (
            <a
              key={href}
              href={href}
              download={fileName}
              className="btn btn-outline btn-primary rounded-md"
            >
              {label}
            </a>
          ))}
        </ContactCard>
      </div>
    </Layout>
  );
}
