import { ThemeProvider } from '@/context/ThemeContext';
import { Outlet } from '@tanstack/react-router';
import { Head } from '@/components/atoms';
import { Footer } from './Footer';
import { Navbar } from './Navbar/Navbar';

export function Root() {
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
