import { Outlet } from '@tanstack/react-router';
import { Head } from '@/components/atoms';
import { Footer } from './Footer';
import { Navbar } from './Navbar/Navbar';

export function Root() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
