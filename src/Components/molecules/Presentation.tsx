import { Header } from "../atoms/Header";
import { Section } from "../atoms/Section";
import { TooltipCustom } from "../atoms/TooltipCustom";

const Presentation = () => {
  return (
    <Section className="gap-4">
      <Header className="sr-only">Presentazione</Header>
      <p>
        Sono un <strong>frontend developer</strong>. Ho iniziato a programmare
        da bambino, con uno
        <TooltipCustom
          trigger="ZX Spectrum"
          content="Un computer personale degli anni '80, famoso per i suoi giochi e programmi"
        />
        e vari manuali di Basic, creando piccoli giochi e programmi, e da allora
        il mio interesse per la tecnologia non si è mai fermato.
      </p>
      <p>
        Negli anni ho esplorato vari aspetti creativi della tecnologia: dalla{" "}
        <TooltipCustom
          trigger="modellazione 3D"
          content="Creazione di modelli tridimensionali utilizzando software come 3ds Max e SketchUp"
        />
        e il
        <TooltipCustom
          trigger="disegno digitale"
          content="Uso di software come Clipt Studio Paint per creare illustrazioni digitali"
        />
        al mondo di
        <TooltipCustom
          trigger="arduino."
          content="Piattaforma open-source per creare progetti di elettronica e programmazione"
        />
        Dopo esperienze in vari settori, ho scelto di focalizzarmi sullo
        sviluppo <strong>frontend</strong>, dove posso dare forma a idee
        trasformandole in applicazioni web fluide e ben strutturate.
      </p>
      <p>
        Il <strong>frontend</strong> rappresenta per me il perfetto equilibrio
        tra <strong>programmazione</strong> e <strong>design</strong>,
        consentendomi di tradurre progetti in esperienze digitali intuitive e
        dinamiche.
      </p>
      <p>
        Dai un'occhiata ai miei progetti per vedere come posso contribuire al
        tuo team e portare valore con le mie competenze e la mia passione.
      </p>
    </Section>
  );
};

export default Presentation;
