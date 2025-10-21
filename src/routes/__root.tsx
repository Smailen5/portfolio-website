//src/routes/__root.tsx
/// <reference types="vite/client" />

import Footer from '@/components/organisms/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@components/organisms/Navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Head } from '@/components/atoms/Head';

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
