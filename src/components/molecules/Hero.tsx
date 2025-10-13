import { Link } from "@tanstack/react-router";

/**
 * Componente Hero - Sezione principale della homepage
 *
 * Mostra:
 * - Animazione "Hello World" con effetto typing
 * - Nome con tooltip informativo
 * - Ruolo (Frontend Developer)
 * - CTA (Call To Action) per contatti e progetti
 */
export const Hero = () => {
  return (
    <section className="w-full">
      <main className="flex flex-col gap-4">
        {/* presentazione */}
        <header className="space-y-4">
          <p className="text-4xl">
            <span className="animate-typing text-base-content w-fit overflow-hidden border-r-2 font-mono tracking-wide whitespace-nowrap">
              {"<Hello World>"}
            </span>{" "}
            sono
          </p>
          <h2
            className="text-secondary lg:tooltip text-6xl font-bold"
            data-tip="Si, il mio nome significa 'sorridi sempre'! 😊"
          >
            Smailen Vargas
          </h2>
        </header>
        <p className="text-3xl">Frontend developer</p>

        {/* call to action */}
        <nav className="md:flex-star flex flex-col flex-wrap gap-4 md:flex-row">
          <Link to="/contact" className="btn btn-primary">
            Contattami
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            Progetti
          </Link>
        </nav>
      </main>
    </section>
  );
};
