import { Outlet } from '@tanstack/react-router';
import { DocumentHead } from '@/shared/components/DocumentHead';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function Root() {
  return (
    <div className="flex min-h-screen flex-col">
      <DocumentHead />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
