// icone per avatar che verranno animate
import avatarIcon from "../assets/images/avatar/avatar-smailen.webp";
import avatarIcon2 from "../assets/images/avatar/avatar-smailen-2.webp";
import avatarIcon3 from "../assets/images/avatar/avatar-smailen-github.webp";
import avatarIcon4 from "../assets/images/avatar/avatar-smailen-linkedin.webp";
// immagini di anteprima progetti
import thumbnailProject1 from "../assets/images/coming-soon-page.webp";
import thumbnailProject2 from "../assets/images/generatore-password.webp";
import thumbnailProject3 from "../assets/images/calcolatore-mance.webp";
import thumbnailProject4 from "../assets/images/card-nft.webp";
import thumbnailProject5 from "../assets/images/pagina-di-accesso-landing-page.webp";
import thumbnailProject6 from "../assets/images/card-social-links.webp";
import thumbnailProject7 from "../assets/images/wiki-cocktail.webp";
import thumbnailProject8 from "../assets/images/skilled-elearning.webp";

export const avatarImages: string[] = [
  avatarIcon,
  avatarIcon2,
  avatarIcon3,
  avatarIcon4,
];

export const images: Record<string, { small: string; large: string }> = {
  thumbnailProject1: {
    small: thumbnailProject1,
    large: thumbnailProject1,
  },
  thumbnailProject2: {
    small: thumbnailProject2,
    large: thumbnailProject2,
  },
  thumbnailProject3: {
    small: thumbnailProject3,
    large: thumbnailProject3,
  },
  thumbnailProject4: {
    small: thumbnailProject4,
    large: thumbnailProject4,
  },
  thumbnailProject5: {
    small: thumbnailProject5,
    large: thumbnailProject5,
  },
  thumbnailProject6: {
    small: thumbnailProject6,
    large: thumbnailProject6,
  },
  thumbnailProject7: {
    small: thumbnailProject7,
    large: thumbnailProject7,
  },
  thumbnailProject8: {
    small: thumbnailProject8,
    large: thumbnailProject8,
  },
};
