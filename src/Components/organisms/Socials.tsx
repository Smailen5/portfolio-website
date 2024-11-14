import social from "../../data/social";
import { Header } from "../atoms/Header";
import { HeroContact } from "../atoms/HeroContact";
import { Section } from "../atoms/Section";
// import { HeroContact } from "../atoms/HeroContact";
import ButtonSocial from "../molecules/ButtonSocial";
import FormComponent from "./FormComponent";

const Socials = () => {
  return (
    <Section>
      <Header type="h2">Contatti</Header>
      <main className="grid gap-14 md:grid-cols-2">
        <div className="grid gap-10 md:gap-0">
          <HeroContact noHeader className="lg:w-full" />
          <div className="flex h-auto flex-col gap-8 md:grid md:h-28 md:grid-cols-2 md:items-center md:gap-0 md:gap-x-4">
            {social.map((el, index) => (
              <ButtonSocial key={index} {...el} />
            ))}
          </div>
        </div>
        <FormComponent />
      </main>
    </Section>
  );
};

export default Socials;
