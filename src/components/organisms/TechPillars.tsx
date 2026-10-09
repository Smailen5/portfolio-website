import { Section, Separator } from '@/components/atoms';
import linuxIcon from '@/assets/icons/linux.svg';
import proxmoxIcon from '@/assets/icons/proxmox.svg';
import reactIcon from '@/assets/icons/react.svg';

/**
 * Dati dei tre pilastri tecnici mostrati nella Home.
 * Il titolo e' provvisorio e i contenuti riflettono competenze reali
 * (frontend/backend, sistemi Linux, homelab).
 */
const pillars = [
  {
    icon: reactIcon,
    title: 'Frontend & Backend',
    items: [
      'React',
      'TypeScript (strict)',
      'TanStack Router',
      'Tailwind CSS',
      'API REST',
    ],
  },
  {
    icon: linuxIcon,
    title: 'Amministrazione Linux',
    items: [
      'Debian / Ubuntu',
      'LPIC-1 (in preparazione)',
      'Bash scripting',
      'Gestione sistemistica',
    ],
  },
  {
    icon: proxmoxIcon,
    title: 'Homelab & Virtualizzazione',
    items: ['Nodo Proxmox VE', 'Container LXC', 'Self-hosting', 'Backup PBS'],
  },
];

/**
 * Componente TechPillars - Sezione dei tre pilastri tecnici
 *
 * Griglia a 3 colonne su desktop e impilata su mobile, con un box per
 * ogni area di competenza. Posizionata nella Home sotto i progetti.
 */
export const TechPillars = () => {
  return (
    <Section>
      <h2 className="text-center">Tecnologie e sistemi</h2>

      <Separator />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map(pillar => (
          <article
            key={pillar.title}
            className="bg-base-300 border-primary/40 flex flex-col gap-4 rounded-lg border p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-primary text-lg font-bold">{pillar.title}</h3>
              <img src={pillar.icon} alt="" className="size-8 shrink-0" />
            </div>
            <ul className="flex flex-wrap gap-2">
              {pillar.items.map(item => (
                <li
                  key={item}
                  className="badge badge-outline border-primary/40 rounded-md text-xs font-semibold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};
