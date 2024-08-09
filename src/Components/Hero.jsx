import { Button } from "@nextui-org/react";

const Hero = () => {
  return (
    <section className="mx-auto flex h-screen w-3/4 flex-col items-center justify-center gap-4">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {/* icona con animazione */}
            <div className="relative">
              <div className="absolute size-4 animate-ping rounded-full bg-green-600/60 duration-1000" />
              <div className="size-4 rounded-full bg-green-600" />
            </div>

            <p className="uppercase">disponibile per un'assunzione</p>
          </div>
          <div>
            <h2 className="text-4xl">Ciao, sono </h2>
            <h1 className="text-5xl font-bold">Smailen Vargas</h1>
          </div>
          <p className="text-2xl">Frontend developer</p>
        </div>
        <div className="flex flex-col gap-2">
          <Button>Contattami</Button>
          <Button>Progetti</Button>
        </div>
      </div>
      {/* <div className="h-44 w-full bg-red-500"></div> */}
    </section>
  );
};

export default Hero;
