import social from "@/data/social";
import ButtonSocial from "@/features/social/components/Button";

const SocialIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {social.map((el, index) => (
        <ButtonSocial key={index} {...el} />
      ))}
    </div>
  );
};

export default SocialIcons;
