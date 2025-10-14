/**
 * Componente Presentation - Sezione "Chi sono"
 *
 * Racconta la storia personale e professionale:
 * - Origini della passione per la programmazione (ZX Spectrum, Basic)
 * - Percorso creativo (3D, disegno digitale, Arduino)
 * - Vocazione nel frontend development
 * - Hobby e interessi personali
 *
 * Include tooltip informativi su termini tecnici per migliorare l'UX
 */
const Presentation = () => {
  return (
    <section className="mx-auto flex w-full flex-col gap-16">
      <h2 className="sr-only">Presentazione</h2>
      <p>
        Sono un <strong className="text-accent">frontend developer</strong> con
        una passione che nasce dall&apos;infanzia. Tutto è iniziato con uno{" "}
        <strong
          className="lg:tooltip text-accent"
          data-tip="Un computer personale degli anni '80, famoso per i suoi giochi e programmi"
        >
          ZX Spectrum
        </strong>{" "}
        e la magia della programmazione in Basic, quei primi programmi
        rudimentali hanno acceso una scintilla che non si è mai spenta.
      </p>
      <p>
        Il mio percorso è stato guidato dalla curiosità e dalla creatività. Ho
        esplorato la{" "}
        <strong
          className="lg:tooltip text-accent"
          data-tip="Creazione di modelli tridimensionali utilizzando software come 3ds Max e SketchUp"
        >
          modelazione 3D
        </strong>
        , il{" "}
        <strong
          className="lg:tooltip text-accent"
          data-tip="Uso di software come Clipt Studio Paint per creare illustrazioni digitali"
        >
          disegno digitale
        </strong>
        , e gli esperimenti con{" "}
        <strong
          className="lg:tooltip text-accent"
          data-tip="Piattaforma open-source per creare progetti di elettronica e programmazione"
        >
          arduino.
        </strong>{" "}
        Questa varietà di esperienze mi ha portato a trovare la mia vera
        vocazione nello sviluppo{" "}
        <strong className="text-accent">frontend</strong>.
      </p>
      <p>
        Nel <strong className="text-accent">frontend development</strong> ho
        trovato il perfetto equilibrio tra problem solving e creatività. Mi
        appassiona la sfida di trasformare concept di design in interfacce
        interattive, ottimizzando ogni dettaglio per creare esperienze web
        coinvolgenti.
      </p>
      <p>
        Quando non sono immerso nel codice, mi dedico allo studio autodidatta
        della chitarra elettrica e sperimento con lo sviluppo di videogiochi
        usando Phaser e Kaboom.js.
      </p>
    </section>
  );
};

export default Presentation;
