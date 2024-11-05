import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/atoms/tooltip";
import { ButtonAction } from "../atoms/ButtonAction";

export const Hero = () => {
  return (
    <section className="w-full">
      <main className="flex flex-col gap-4">

        {/* presentazione */}
        <header className="space-y-4">
          <p className="text-5xl">&lt;Hello World&gt; sono</p>
          <h2 className="text-6xl font-bold text-secondary">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>Smailen</TooltipTrigger>
                <TooltipContent>
                  <p>Si, il mio nome significa 'sorridi sempre'! 😊</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>{" "}
            Vargas
          </h2>
        </header>
        <p className="text-3xl">Frontend developer</p>

        {/* call to action */}
        <nav className="md:flex-star flex flex-col flex-wrap gap-4 md:flex-row">
          <ButtonAction navigateTo="contact">Contattami</ButtonAction>
          <ButtonAction navigateTo="projects">Progetti</ButtonAction>
        </nav>
      </main>
    </section>
  );
};
