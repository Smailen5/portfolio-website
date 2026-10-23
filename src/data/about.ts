import avatar from '@/assets/images/avatar/avatar-smailen-2.webp';
import type {
  Certification,
  HomelabSystem,
  Profile,
  StudyItem,
  TechGroup,
} from '@/shared/types/about';

export const profile: Profile = {
  name: 'Smailen Vargas',
  paragraphs: ['TODO percorso', 'TODO anni di studio e sistemi'],
  photo: { src: avatar, alt: 'Ritratto di Smailen Vargas' },
};

export const certifications: Certification[] = [
  {
    name: 'TODO certificazione',
    status: 'in preparazione',
    topics: [
      'TODO punto 1',
      'TODO punto 2',
      'TODO punto 3',
      'TODO punto 4',
      'TODO punto 5',
    ],
  },
  {
    name: 'TODO certificazione',
    status: 'conseguita',
    topics: [
      'TODO punto 1',
      'TODO punto 2',
      'TODO punto 3',
      'TODO punto 4',
      'TODO punto 5',
      'TODO punto 6',
    ],
    badge: {
      src: '/assets/images/badges/certified.svg',
      alt: 'certificazione',
    },
  },
];

export const techGroups: TechGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'TanStack Router', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Sistemi & Strumenti',
    items: ['Debian/GNU linux', 'Bash', 'Docker', 'Git', 'Nginx'],
  },
];

export const homelabSystems: HomelabSystem[] = [
  {
    id: 'TODO id',
    title: 'TODO name',
    image: {
      src: '/todo/src/url',
      alt: 'TODO alt text',
    },
    facts: [
      {
        label: 'TODO label 1',
        value: 'TODO value 1',
      },
      {
        label: 'TODO label 2',
        value: 'TODO value 2',
      },
    ],
  },
  {
    id: 'TODO id 2',
    title: 'TODO name',
    image: {
      src: '/todo/src/url 2',
      alt: 'TODO alt text 2',
    },
    facts: [
      {
        label: 'TODO label 1',
        value: 'TODO value 1',
      },
      {
        label: 'TODO label 2',
        value: 'TODO value 2',
      },
    ],
  },
];

export const studyItems: StudyItem[] = [
  {
    title: 'Preparazione LPIC-1 101',
    description: 'TODO description',
    href: 'https://www.w3schools.com/html/',
  },
  {
    title: 'Esercitazioni Frontend Mentor',
    description: 'TODO description',
    href: 'https://www.frontendmentor.io/profile/Smailen5',
  },
];
