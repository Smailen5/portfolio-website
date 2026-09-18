/// <reference types="vite/client" />

import { NotFound, Root } from '@/components/organisms';
import { getRootHead } from '@/shared/utils/seo';
import { createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  head: () => getRootHead(),
  component: Root,
  notFoundComponent: NotFound,
});
