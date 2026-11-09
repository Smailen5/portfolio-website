import { icons } from '@/assets/icons/index';

type SocialItem = {
  name: string;
  link: string;
  icon: keyof typeof icons;
};

export const SOCIAL_PROFILES = {
  github: {
    name: 'GitHub',
    link: 'https://github.com/Smailen5',
    icon: 'github',
  },
  linkedin: {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/smailen-vargas/',
    icon: 'linkedin',
  },
  frontendMentor: {
    name: 'Frontend Mentor',
    link: 'https://www.frontendmentor.io/profile/Smailen5',
    icon: 'frontendMentor',
  },
} as const satisfies Record<string, SocialItem>;

export const social: SocialItem[] = Object.values(SOCIAL_PROFILES);
