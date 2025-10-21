import { icons } from '@/assets/icons/index';

type SocialItem = {
  name: string;
  link: string;
  icon: keyof typeof icons;
};

const social: SocialItem[] = [
  {
    name: 'Github',
    link: 'https://github.com/Smailen5',
    icon: 'github',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/smailen-vargas/',
    icon: 'linkedin',
  },
  {
    name: 'Frontend Mentor',
    link: 'https://www.frontendmentor.io/profile/Smailen5',
    icon: 'frontendMentor',
  },
];

export default social;
