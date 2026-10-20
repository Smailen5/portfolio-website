import { Layout } from '@/components/molecules';
import { ContactCard } from '@/features/contact/components/ContactCard';
import { CopyEmailButton } from '@/features/contact/components/CopyEmailButton';

const EMAIL = 'job@smailenvargas.com';
const MAILTO_URL = `mailto:${EMAIL}?subject=42-website-contact`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/smailen-vargas/';
const GITHUB_URL = 'https://github.com/Smailen5';

const CURRICULUM_FILES = [
  {
    label: 'Scarica CV in italiano',
    href: '/curriculum/cv-smailen-vargas-it.pdf',
    fileName: 'CV-Smailen-Vargas-IT.pdf',
  },
  {
    label: 'Scarica CV in inglese',
    href: '/curriculum/cv-smailen-vargas-en.pdf',
    fileName: 'CV-Smailen-Vargas-EN.pdf',
  },
];

export function ContactPage() {
  return (
    <Layout classLayout="bg-base-100" classContent="max-w-4xl px-6 py-10">
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
          title="LinkedIn"
          description="Profilo professionale con esperienze, competenze e certificazioni."
        >
          <a
            href={LINKEDIN_URL}
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
          title="GitHub"
          description="Attività open source, progetti personali e codice dei siti che costruisco."
        >
          <a
            href={GITHUB_URL}
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
