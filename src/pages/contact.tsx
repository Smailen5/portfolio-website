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
    <Layout>
      <header>
        <h1>Mettiamoci in Contatto</h1>
        <p>
          Aperto a collaborazioni creative, discussioni tecniche e nuovi
          progetti. Scrivimi direttamente, rispondo solitamente entro 48 ore.
        </p>
      </header>

      <div>
        <ContactCard
          id="contact-email"
          title="Email Diretta"
          description={<a href={MAILTO_URL}>{EMAIL}</a>}
        >
          <CopyEmailButton email={EMAIL} />
        </ContactCard>

        <ContactCard
          id="contact-linkedin"
          title="LinkedIn"
          description="Profilo professionale con esperienze, competenze e certificazioni."
        >
          <a href={LINKEDIN_URL}>Connettiti</a>
        </ContactCard>

        <ContactCard
          id="contact-github"
          title="GitHub"
          description="Attività open source, progetti personali e codice dei siti che costruisco."
        >
          <a href={GITHUB_URL}>Esplora Profilo</a>
        </ContactCard>

        <ContactCard
          id="contact-cv"
          title="Curriculum Vitae"
          description="Aggiornato a ottobre 2026, disponibile in italiano e in inglese."
        >
          {CURRICULUM_FILES.map(({ label, href, fileName }) => (
            <a key={href} href={href} download={fileName}>
              {label}
            </a>
          ))}
        </ContactCard>
      </div>
    </Layout>
  );
}
