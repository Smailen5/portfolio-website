import type { FileRouteTypes } from '@/routeTree.gen';

export const NAVIGATION_LINKS = [
  { linkTo: '/', label: 'home' },
  { linkTo: '/projects', label: 'projects' },
  { linkTo: '/contact', label: 'contact' },
  { linkTo: '/about', label: 'about' },
] as const satisfies readonly { linkTo: FileRouteTypes['to']; label: string }[];
