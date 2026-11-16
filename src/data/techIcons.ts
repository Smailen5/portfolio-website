import bashIcon from '@/assets/icons/tech/gnubash.svg';
import cloudflareIcon from '@/assets/icons/tech/cloudflare.svg';
import daisyuiIcon from '@/assets/icons/tech/daisyui.svg';
import debianIcon from '@/assets/icons/tech/debian.svg';
import dockerIcon from '@/assets/icons/tech/docker.svg';
import expressIcon from '@/assets/icons/tech/express.svg';
import gitIcon from '@/assets/icons/tech/git.svg';
import jwtIcon from '@/assets/icons/tech/jsonwebtokens.svg';
import mongodbIcon from '@/assets/icons/tech/mongodb.svg';
import mongooseIcon from '@/assets/icons/tech/mongoose.svg';
import nextIcon from '@/assets/icons/tech/nextdotjs.svg';
import nginxIcon from '@/assets/icons/tech/nginx.svg';
import nodeIcon from '@/assets/icons/tech/nodedotjs.svg';
import openapiIcon from '@/assets/icons/tech/openapiinitiative.svg';
import proxmoxIcon from '@/assets/icons/tech/proxmox.svg';
import reactIcon from '@/assets/icons/tech/react.svg';
import rockyIcon from '@/assets/icons/tech/rockylinux.svg';
import sharpIcon from '@/assets/icons/tech/sharp.svg';
import tailwindIcon from '@/assets/icons/tech/tailwindcss.svg';
import tanstackIcon from '@/assets/icons/tech/tanstack.svg';
import typescriptIcon from '@/assets/icons/tech/typescript.svg';
import viteIcon from '@/assets/icons/tech/vite.svg';
import vitestIcon from '@/assets/icons/tech/vitest.svg';
import zodIcon from '@/assets/icons/tech/zod.svg';

import type { TechName } from '@/data/about';
import type { TechIcon } from '@/shared/types/about';

/**
 * Mappa nome tecnologia -> icona per le pillole del Tech Stack.
 *
 * Le chiavi sono tipizzate su `TechName`, derivato dagli `items` di `techGroups`
 * in `@/data/about`: una tecnologia senza icona (o un'icona per una tecnologia
 * inesistente) non compila.
 *
 * `chip` sceglie il fondo della piastrina in base al contrasto del logo.
 * `light` usa `bg-base-content` per i brand con contrasto inferiore a 3:1 sul
 * fondo scuro del sito, `dark` usa `bg-base-100` per tutti gli altri.
 *
 * La scelta vale finché il sito espone il solo tema scuro `nebula`: con un tema
 * chiaro i due token si invertono e il contrasto va ricalcolato.
 */
export const TECH_ICONS: Record<TechName, TechIcon> = {
  React: { src: reactIcon, chip: 'dark' },
  TypeScript: { src: typescriptIcon, chip: 'dark' },
  'TanStack Router': { src: tanstackIcon, chip: 'dark' },
  'Tailwind CSS': { src: tailwindIcon, chip: 'dark' },
  Vite: { src: viteIcon, chip: 'dark' },
  'Next.js': { src: nextIcon, chip: 'light' },
  DaisyUI: { src: daisyuiIcon, chip: 'dark' },
  'Node.js': { src: nodeIcon, chip: 'dark' },
  Express: { src: expressIcon, chip: 'light' },
  'REST API': { src: openapiIcon, chip: 'dark' },
  MongoDB: { src: mongodbIcon, chip: 'dark' },
  Mongoose: { src: mongooseIcon, chip: 'light' },
  JWT: { src: jwtIcon, chip: 'light' },
  Zod: { src: zodIcon, chip: 'dark' },
  Sharp: { src: sharpIcon, chip: 'dark' },
  Vitest: { src: vitestIcon, chip: 'dark' },
  Debian: { src: debianIcon, chip: 'light' },
  Rocky: { src: rockyIcon, chip: 'dark' },
  'Proxmox VE': { src: proxmoxIcon, chip: 'dark' },
  'Cloudflare Tunnels': { src: cloudflareIcon, chip: 'dark' },
  Bash: { src: bashIcon, chip: 'dark' },
  Docker: { src: dockerIcon, chip: 'dark' },
  Git: { src: gitIcon, chip: 'dark' },
  Nginx: { src: nginxIcon, chip: 'dark' },
};
