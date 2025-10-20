// src/routes/contact/index.tsx

import { Head } from '@/components/atoms/Head';
import { Layout } from '@/components/molecules/Layout';
import SocialIcons from '@/components/molecules/Social/SocialIcon';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact/')({
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Head
        title="Contatti | Smailen Vargas"
        description="Contatta Smailen Vargas per collaborazioni, domande o progetti. Disponibile via email e social media."
        keywords="Contatti, Smailen Vargas, Email, Collaborazioni, Frontend Developer"
        ogUrl="https://smailenvargas.com/contact"
      />
      <Layout classContent="p-6">
        <section
          aria-labelledby="contact-heading"
          className="flex-1 space-y-4 md:flex md:flex-col md:justify-center md:text-left lg:w-1/2 lg:text-left"
        >
          <h3 className="sr-only text-3xl font-semibold">Contattami</h3>
          <p>
            Se hai domande, richieste di collaborazione, o semplicemente vuoi
            parlare di React, non esitare a contattarmi. Sarò felice di
            risponderti il prima possibile!
          </p>
        </section>

        <div className="flex flex-col gap-8 pt-10">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <p>
              Scrivimi a:{' '}
              <a
                href="mailto:smailenv91@gmail.com?subject=42-website-contact"
                className="link link-accent font-semibold"
              >
                smailenv91@gmail.com
              </a>
            </p>

            <p className="text-xs">
              (Clicca per aprire il tuo client email, oppure copia
              l&apos;indirizzo)
            </p>
          </div>

          {/* Telefono */}
          <div className="">
            <p>
              Per contatto telefonico e dettagli completi, scarica il mio CV, o
              contattami in uno dei social qui sotto.
            </p>
          </div>

          {/* Social */}
          <SocialIcons />
        </div>
      </Layout>
    </>
  );
}
