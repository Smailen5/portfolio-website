import { Button } from "@nextui-org/react";
import { MdOutlineEmail } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-4">
        {/* icona con animazione con testo */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute size-4 animate-ping rounded-full bg-green-600/60 duration-1000" />
            <div className="size-4 rounded-full bg-green-600" />
          </div>
          <p className="uppercase">disponibile per un&apos;assunzione</p>
        </div>

        {/* presentazione */}
        <div>
          <h2 className="text-4xl">Ciao, sono </h2>
          <h1 className="text-5xl font-bold">Smailen Vargas</h1>
        </div>
        <p className="text-2xl">Frontend developer</p>

        {/* call to action */}
        <div className="md:flex-star flex flex-col flex-wrap gap-2 md:flex-row">
          <Button className="w-fit" variant="shadow" color="primary" endContent={<MdOutlineEmail />}>
            Contattami
          </Button>
          <Button className="w-fit" variant="shadow" color="secondary" startContent={<GoProjectRoadmap />}>
            Progetti
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
