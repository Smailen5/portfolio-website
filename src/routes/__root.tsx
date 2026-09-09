/// <reference types="vite/client" />

import { NotFound, Root } from '@/components/organisms';
import { createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
});
