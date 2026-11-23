import type { FileRouteTypes } from '@/routeTree.gen';

export const NAVIGATION_LINKS = [
  { linkTo: '/', label: 'Home' },
  { linkTo: '/projects', label: 'Progetti' },
  { linkTo: '/contact', label: 'Contatti' },
  { linkTo: '/about', label: 'Chi sono' },
] as const satisfies readonly { linkTo: FileRouteTypes['to']; label: string }[];
