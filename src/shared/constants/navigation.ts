export const NAVIGATION_LINKS = [
  { linkTo: '/', params: 'home' },
  { linkTo: '/projects', params: 'projects' },
  { linkTo: '/contact', params: 'contact' },
] as const;

export type NavigationLink = (typeof NAVIGATION_LINKS)[number];
