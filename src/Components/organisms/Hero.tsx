import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/atoms/tooltip";
import { ButtonAction } from "../atoms/ButtonAction";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-4">

        {/* presentazione */}
        <div>
          <p className="text-5xl">Ciao, Io sono </p>
          <h2 className="text-6xl font-bold">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="">Smailen</TooltipTrigger>
                <TooltipContent>
                  <p>Si, il mio nome significa 'sorridi sempre'!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>{" "}
            Vargas
          </h2>
        </div>
        <p className="text-3xl">Frontend developer</p>

        {/* call to action */}
        <div className="md:flex-star flex flex-col flex-wrap gap-4 md:flex-row">
          <ButtonAction navigateTo="contact">Contattami</ButtonAction>
          <ButtonAction navigateTo="projects">Progetti</ButtonAction>
        </div>
      </div>
    </section>
  );
};

export default Hero;
