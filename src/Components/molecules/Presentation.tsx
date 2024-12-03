import { Header } from "../atoms/Header";
import { Section } from "../atoms/Section";
import { TooltipCustom } from "../atoms/TooltipCustom";

const Presentation = () => {
  return (
    <Section className="gap-4">
      <Header className="sr-only">Presentazione</Header>
      <p>
        Sono un <strong>frontend developer</strong> con una passione che nasce
        dall'infanzia. Tutto è iniziato con uno <TooltipCustom
          trigger="ZX Spectrum"
          content="Un computer personale degli anni '80, famoso per i suoi giochi e programmi"
        /> e la magia della programmazione in Basic, quei primi programmi
        rudimentali hanno acceso una scintilla che non si è mai spenta.
      </p>
      <p>
        Il mio percorso è stato guidato dalla curiosità e dalla creatività: dalla{" "}
        <TooltipCustom
          trigger="modellazione 3D"
          content="Creazione di modelli tridimensionali utilizzando software come 3ds Max e SketchUp"
        /> al
        <TooltipCustom
          trigger="disegno digitale"
          content="Uso di software come Clipt Studio Paint per creare illustrazioni digitali"
        />, fino agli esperimenti con
        <TooltipCustom
          trigger="arduino."
          content="Piattaforma open-source per creare progetti di elettronica e programmazione"
        /> Questa varietà di esperienze mi ha portato a trovare la mia vera vocazione
        nello sviluppo <strong>frontend</strong>.
      </p>
      <p>
        Nel <strong>frontend development</strong> ho trovato il perfetto equilibrio
        tra problem solving e creatività. Mi appassiona la sfida di trasformare
        concept di design in interfacce interattive, ottimizzando ogni dettaglio
        per creare esperienze web coinvolgenti.
      </p>
      <p>
        Quando non sono immerso nel codice, mi dedico allo studio autodidatta della
        chitarra elettrica e sperimento con lo sviluppo di videogiochi usando Phaser
        e Kaboom.js.
      </p>
    </Section>
  );
};

export default Presentation;
