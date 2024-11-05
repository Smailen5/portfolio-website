import social from "../../data/social";
import { HeroContact } from "../atoms/HeroContact";
// import { HeroContact } from "../atoms/HeroContact";
import ButtonSocial from "../molecules/ButtonSocial";
import FormComponent from "./FormComponent";

const Socials = () => {
  return (
    <section className="flex flex-col gap-12">
      <h3 className="text-center text-3xl font-semibold">Contatti</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="grid gap-8 md:gap-0">
          <HeroContact noHeader className="lg:w-full" />
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-0 md:gap-x-4 md:items-center h-40">
            {social.map((el, index) => (
              <ButtonSocial key={index} {...el} />
            ))}
          </div>
        </div>
        {/* <HeroContact/> */}
        <FormComponent />
      </div>
    </section>
  );
};

export default Socials;
