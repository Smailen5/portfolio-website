import social from "../data/social";
import Social from "./Social";

const Socials = () => {
  return (
    <section className="flex flex-col gap-8">
      <h3 className="text-center text-2xl font-semibold">Social</h3>
      <div className="justify-cente flex h-full w-full flex-col justify-start gap-8 md:grid md:grid-cols-3">
        {social.map((social) => {
          return <Social key={social.name} {...social} />;
        })}
      </div>
    </section>
  );
};

export default Socials;
