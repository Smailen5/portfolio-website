import { HeroContact } from "../atoms/HeroContact";
import FormComponent from "../organisms/FormComponent";

export const ContactTemplate = () => {
  return (
    <>
      <main className="flex min-h-screen justify-center bg-neutral-50 py-16">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 text-center md:max-w-[1024px] lg:flex-row lg:items-center lg:gap-10">
          <HeroContact />
          <FormComponent />
        </div>
      </main>
    </>
  );
};
