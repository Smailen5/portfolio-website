import social from "../../data/social";
import ButtonSocial from "../molecules/ButtonSocial";

const Socials = () => {
  return (
    <section className="flex flex-col gap-8">
      <h3 className="text-center text-2xl font-semibold">Social</h3>
      <div className="flex h-full w-full flex-col justify-start gap-8 md:grid md:grid-cols-3">
        {social.map(({ name, link, icon }) => (
          <ButtonSocial key={name} name={name} link={link} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default Socials;
