import { Head } from '@/components/atoms';
import { Layout } from '@/components/molecules';
import { Link } from '@tanstack/react-router';

export function NotFound() {
  return (
    <Layout classContent="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center gap-6 px-6 pb-14 text-center">
      <Head title="Pagina non trovata | Smailen Vargas" />
      <h1 className="sr-only">Pagina non trovata</h1>
      <p aria-hidden="true" className="text-8xl font-extrabold">
        404
      </p>
      <p className="text-xl">
        La pagina che stai cercando non esiste... hey neanche questa pagina
        esiste!?
      </p>
      <Link to="/" className="btn btn-primary">
        Torna alla home
      </Link>
    </Layout>
  );
}
