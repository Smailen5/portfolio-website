import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../atoms/tooltip";

const Presentation = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 id="presentation-title" className="sr-only">
        Presentazione
      </h2>
      <p>
        Sono un <strong>frontend developer</strong>. Ho iniziato a programmare
        da bambino, con uno{" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>ZX Spectrum</TooltipTrigger>
            <TooltipContent>
              Un computer personale degli anni '80, famoso per i suoi giochi e
              programmi.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>{" "}
        e vari manuali di Basic, creando piccoli giochi e programmi, e da allora
        il mio interesse per la tecnologia non si è mai fermato.
      </p>
      <p>
        Negli anni ho esplorato vari aspetti creativi della tecnologia: dalla{" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <strong>modellazione 3D</strong>
            </TooltipTrigger>
            <TooltipContent>
              Creazione di modelli tridimensionali utilizzando software come 3ds
              Max e SketchUp
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>{" "}
        e il{" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <strong>disegno digitale</strong>
            </TooltipTrigger>
            <TooltipContent>
              Uso di software come Clip Studio Paint per creare illustrazioni
              digitali
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>{" "}
        al mondo di {" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger><strong>Arduino</strong></TooltipTrigger>
            <TooltipContent>
              <p>
                Piattaforma open-source per creare progetti di elettronica e
                programmazione.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        . Dopo esperienze in vari settori, ho scelto di focalizzarmi sullo
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
    </section>
  );
};

export default Presentation;
