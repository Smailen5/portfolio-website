import social from "../../data/social";
import { HeroContact } from "../atoms/HeroContact";
// import { HeroContact } from "../atoms/HeroContact";
import ButtonSocial from "../molecules/ButtonSocial";
import FormComponent from "./FormComponent";

const Socials = () => {
  return (
    <section className="flex flex-col gap-8">
      <h3 className="text-center text-2xl font-semibold">Social</h3>
      <div className="grid md:grid-cols-2">
        <div>
          <HeroContact />
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-0">
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
