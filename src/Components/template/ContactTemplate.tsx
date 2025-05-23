import { HeroContact } from "@components/atoms/HeroContact";
import FormComponent from "@components/organisms/FormComponent";

export const ContactTemplate = () => {
  return (
    <>
      <div className="flex flex-col justify-around gap-20 text-center md:max-w-[1024px] md:flex-row lg:flex-row lg:items-center lg:gap-10">
        <HeroContact />
        <FormComponent />
      </div>
    </>
  );
};
