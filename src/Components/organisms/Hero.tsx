import { Button } from "@/Components/atoms/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/atoms/tooltip";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-4">
        {/* icona con animazione con testo */}
        {/* Per il momento la rimuovo, in futuro vorrei fare qualcosa di piu carino */}
        {/* <div className="flex items-center gap-2">
          <CirclePulse />
          <p className="uppercase">Pronto per nuove sfide</p>
        </div> */}

        {/* presentazione */}
        <div>
          <h2 className="text-5xl">Ciao, Io sono </h2>
          <h1 className="text-6xl font-bold">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="">Smailen</TooltipTrigger>
                <TooltipContent>
                  <p>Si, il mio nome significa 'sorridi sempre'!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>{" "}
            Vargas
          </h1>
        </div>
        <p className="text-3xl">Frontend developer</p>

        {/* call to action */}
        <div className="md:flex-star flex flex-col flex-wrap gap-2 md:flex-row">
          <Button className="w-fit" color="primary" size="lg">
            <Link to="/contact">
              Contattami
            </Link>
              <MdOutlineEmail />
          </Button>
          <Button className="w-fit" color="secondary" size="lg">
              <GoProjectRoadmap />
            <Link to="/projects">
              Progetti
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
