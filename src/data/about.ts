import avatar from '@/assets/images/avatar/avatar-smailen-2.webp';
import type {
  Certification,
  HomelabSystem,
  Profile,
  LabItem,
  TechGroup,
} from '@/shared/types/about';
import lpiIcon from '@/assets/icons/lpi.svg';
import proxmoxIcon from '@/assets/icons/proxmox.svg';

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
    name: 'LPI Linux Essentials',
    issuer: 'Linux Professional Institute (LPI)',
    status: 'conseguita',
    topics: [
      'Linux Architecture',
      'Command Line (CLI)',
      'Bash Scripting',
      'Filesystem & FHS',
      'Users & Permissions',
      'System Security',
    ],
    badge: {
      src: lpiIcon,
      alt: 'Logo Linux Professional Institute',
    },
    credentialUrl:
      'https://www.credly.com/badges/8dbbb7da-80fd-4c5a-a696-39a2311d8020/public_url',
  },
  {
    name: 'LPIC-1: Linux Administrator (101-500)',
    issuer: 'Linux Professional Institute (LPI)',
    status: 'in preparazione',
    topics: [
      'System Architecture',
      'Boot & systemd',
      'Package Management',
      'LVM Storage',
      'Linux Networking',
      'Security & SSH',
    ],
    badge: {
      src: lpiIcon,
      alt: 'Logo Linux Professional Institute',
    },
  },
  {
    name: 'Introduction to Cloud 101',
    issuer: 'AWS Educate',
    status: 'conseguita',
    topics: [
      'Cloud Architecture',
      'Compute & Storage',
      'Cloud Security',
      'Shared Responsibility',
      'Networking & Scaling',
    ],
    credentialUrl:
      'https://www.credly.com/badges/d84de33b-afb4-4663-8b78-8ee18ad2342b/public_url',
  },
  {
    name: 'Technical Writing',
    issuer: 'Arkigest / Forma.Temp',
    status: 'conseguita',
    topics: [
      'Technical Docs',
      'ADR Authoring',
      'Operations Runbooks',
      'API Documentation',
      'Information Architecture',
    ],
  },
  {
    name: 'Virtualizzazione & Proxmox VE',
    issuer: 'Udemy',
    status: 'conseguita',
    topics: [
      'KVM & LXC',
      'LVM-Thin Storage',
      'Linux Bridge',
      'Backup & PBS',
      'Disaster Recovery',
    ],
  },
  {
    name: 'Full-Stack & DevOps',
    issuer: 'Udemy & Formazione Continua',
    status: 'conseguita',
    topics: [
      'JavaScript ES6+',
      'React & TypeScript',
      'Node.js & REST API',
      'MongoDB',
      'Docker Containers',
    ],
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
    id: 'monday',
    title: 'Proxmox VE Node (monday)',
    image: {
      src: proxmoxIcon,
      alt: 'Logo Proxmox',
    },
    facts: [
      {
        label: 'Host',
        value: 'Mini-PC GMKtec G10 (AMD Ryzen 5 3500U, 16 GB RAM DDR4)',
      },
      {
        label: 'Storage',
        value: '512 GB NVMe (LVM-Thin) + 500 GB SSD SATA secondario',
      },
      {
        label: 'Hypervisor',
        value: 'Proxmox VE su base Debian con orchestrazione VM (KVM) e LXC',
      },
      {
        label: 'Produzione',
        value:
          'VM gateway (Nginx Proxy Manager + Cloudflare Tunnel), VM server-portfolio (Docker), VM agente AI DevOps (OpenClaw)',
      },
      {
        label: 'Sicurezza',
        value:
          'Zero porte esposte sul router, firewall UFW restrittivo su LAN, SSH solo a chiavi con root disabilitato',
      },
    ],
  },
  {
    id: 'yesterday',
    title: 'Proxmox Backup Server (yesterday)',
    image: {
      src: proxmoxIcon,
      alt: 'Logo Proxmox',
    },
    facts: [
      {
        label: 'Host',
        value: 'Server fisico dedicato (Intel Core i3-6098P, 8 GB RAM)',
      },
      {
        label: 'Storage',
        value:
          '500 GB dedicati ai datastore di backup + 1 TB storage aggiuntivo',
      },
      {
        label: 'Sistema',
        value: 'Proxmox Backup Server (PBS) su Debian 13',
      },
      {
        label: 'Strategia',
        value:
          'Backup automatici orari deduplicati e incrementali di tutte le VM e container LXC del nodo primario',
      },
      {
        label: 'Isolamento',
        value:
          'Accessibile esclusivamente in rete locale con accesso SSH blindato e Runbook di disaster recovery',
      },
    ],
  },
];

export const labItems: LabItem[] = [
  {
    title: 'Multi-Distro Sandbox',
    description:
      'VM isolate Debian 13 e Rocky Linux per test di pacchettizzazione (apt vs rpm), systemd e rete.',
  },
  {
    title: 'Storage & Disaster Recovery',
    description:
      'Gestione volumi logici LVM (ridimensionamento a caldo), simulazione guasti e restore con PBS.',
  },
  {
    title: 'Local AI & Automation',
    description:
      'Benchmarking di LLM locali (Ollama/LM Studio su RX 9070 XT) per code review e automazioni.',
  },
  {
    title: 'Security & Hardening',
    description:
      'Policy restrittive UFW, SSH blindato solo a chiavi e scripting Bash per manutenzione autonoma.',
  },
];
