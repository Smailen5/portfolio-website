import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

type AppRouter = ReturnType<typeof getRouter>;

declare module '@tanstack/react-router' {
  interface Register {
    router: AppRouter;
  }
}

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
  });
  return router;
}
