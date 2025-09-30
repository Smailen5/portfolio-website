import FormComponent from "@/features/contact/components/Form";
import { Hero } from "@/features/contact/components/Hero";

export const ContactTemplate = () => {
  return (
    <>
      <div className="flex flex-col justify-around gap-20 text-center md:max-w-[1024px] md:flex-row lg:flex-row lg:items-center lg:gap-10">
        <Hero />
        <FormComponent />
      </div>
    </>
  );
};
