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
  paragraphs: [
    "Sviluppatore **Frontend & Full-Stack** certificato **LPI Linux Essentials**, specializzato nello sviluppo di Single Page Application con **React** e **TypeScript (strict)** e nella progettazione di **API RESTful in Node.js ed Express**. Non mi fermo al browser: gestisco in prima persona l'infrastruttura Linux e **Proxmox VE** su cui girano i miei servizi, curando containerizzazione **Docker**, reverse proxy, esposizione sicura via **Cloudflare Tunnels**, firewall **UFW** e backup automatizzati.",
    "Lavoro con un approccio orientato alla qualità e alla manutenibilità: contratti di tipo rigorosi end-to-end, cura dell'accessibilità (obiettivo **WCAG AA**), test automatizzati con **Vitest** (~80% coverage sul backend in produzione) e **Git workflow** strutturato (GitHub Flow, Conventional Commits, CI su GitHub Actions, SemVer). Adotto una filosofia **Docs-as-Code** redigendo **ADR**, **Runbook** operativi e changelog architetturali, integrando agenti AI locali per code review e automazione senza esporre codice o segreti a terze parti.",
  ],
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
