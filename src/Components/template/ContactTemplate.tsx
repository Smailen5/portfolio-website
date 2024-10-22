import { HeroContact } from "../atoms/HeroContact";
import FormComponent from "../organisms/FormComponent";

export const ContactTemplate = () => {
  return (
    <>
      {/* <main className="flex min-h-screen justify-center py-16"> */}
        <div className="flex flex-col justify-around gap-20 text-center md:max-w-[1024px] lg:flex-row lg:items-center lg:gap-10 md:flex-row">
          <HeroContact />
          <FormComponent />
        </div>
      {/* </main> */}
    </>
  );
};
