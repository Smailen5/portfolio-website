import { Layout } from "@/components/molecules/Layout";
import SocialIcons from '@/components/molecules/Social/SocialIcon';
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact/")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section
        aria-labelledby="contact-heading"
        className="flex-1 space-y-4 md:flex md:flex-col md:justify-center md:text-left lg:w-1/2 lg:text-left"
      >
        <h3 className="text-3xl font-semibold sr-only">Contattami</h3>
        <p>
          Se hai domande, richieste di collaborazione, o semplicemente vuoi
          parlare di React, non esitare a contattarmi. Sarò felice di
          risponderti il prima possibile!
        </p>
      </section>

      <div className="flex flex-col gap-4">
        <p>Scrivimi a:</p>
        <Link to="mailto:smailenv91@gmail.com" className="link link-primary">
          smailenv91@gmail.com
        </Link>
        <p className="text-sm">
          (Clicca per aprire il tuo client email, oppure copia l&apos;indirizzo)
        </p>
      </div>

      <SocialIcons />
    </Layout>
  );
}
