import social from "@/data/social";
import { Icon } from './Icon';

const SocialIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {social.map((el, index) => (
        <Icon key={index} {...el} />
      ))}
    </div>
  );
};

export default SocialIcons;
