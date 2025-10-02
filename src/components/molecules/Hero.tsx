import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atoms/tooltip";
import { Link } from '@tanstack/react-router';

export const Hero = () => {
  return (
    <section className="w-full">
      <main className="flex flex-col gap-4">
        {/* presentazione */}
        <header className="space-y-4">
          <p className="text-5xl">
            <span className="animate-typing w-fit overflow-hidden whitespace-nowrap border-r-2 font-mono tracking-wide text-gray-500">
              {"<Hello World>"}
            </span>{" "}
            sono
          </p>
          <h2 className="text-6xl font-bold text-secondary">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>Smailen</TooltipTrigger>
                <TooltipContent>
                  <p>
                    Si, il mio nome significa &apos;sorridi sempre&apos;! 😊
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>{" "}
            Vargas
          </h2>
        </header>
        <p className="text-3xl">Frontend developer</p>

        {/* call to action */}
        <nav className="md:flex-star flex flex-col flex-wrap gap-4 md:flex-row">
          <Link to='/contact' className='btn btn-primary'>
          Contattami
          </Link>
          <Link to='/projects' className='btn btn-secondary'>
          Progetti
          </Link>
        </nav>
      </main>
    </section>
  );
};
