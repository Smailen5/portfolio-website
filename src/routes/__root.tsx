/// <reference types="vite/client" />

import { Root } from '@/components/organisms';
import { createRootRoute } from '@tanstack/react-router';
import { NotFound } from '@/components/molecules';

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
});
