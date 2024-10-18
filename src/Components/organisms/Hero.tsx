import { Button, Tooltip } from "@nextui-org/react";
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
            Smailen Vargas{" "}
            <Tooltip
              color="warning"
              content="Si, il mio nome significa 'sorridi sempre!'"
            >
              <span className="text-4xl">😊</span>
            </Tooltip>
          </h1>
        </div>
        <p className="text-3xl">Frontend developer</p>

        {/* call to action */}
        <div className="md:flex-star flex flex-col flex-wrap gap-2 md:flex-row">
          <Button
            className="w-fit"
            variant="shadow"
            color="primary"
            size="lg"
            endContent={<MdOutlineEmail />}
          >
            <Link to="/contact">Contattami</Link>
          </Button>
          <Button
            className="w-fit"
            variant="shadow"
            color="secondary"
            size="lg"
            startContent={<GoProjectRoadmap />}
          >
            <Link to="/projects">Progetti</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
