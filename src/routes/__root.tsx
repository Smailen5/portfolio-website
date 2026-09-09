/// <reference types="vite/client" />

import { ThemeProvider } from '@/context/ThemeContext';
import { Footer, Navbar } from '@/components/organisms/';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Head } from '@/components/atoms/';

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <ThemeProvider>
      <Head />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

function NotFoundComponent() {
  return (
    <>
      <p className="text-center text-2xl font-bold">404 Not Found</p>
      <p className="text-center text-lg">
        La pagina che stai cercando non esiste... hey neanche questa pagina
        esiste!?
      </p>
    </>
  );
}
