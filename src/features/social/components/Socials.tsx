import social from "@/data/social";
import { Hero } from "@/features/contact/components/Hero";
import { Header } from "@components/atoms/Header";
import { Section } from "@components/atoms/Section";
// import { HeroContact } from "../atoms/HeroContact";
import FormComponent from "@/features/contact/components/Form";
import ButtonSocial from "@/features/social/components/Button";

const Socials = () => {
  return (
    <Section>
      <Header type="h2">Contatti</Header>
      <main className="grid gap-14 md:grid-cols-2">
        <div className="grid gap-10 md:gap-0">
          <Hero noHeader className="lg:w-full" />
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
