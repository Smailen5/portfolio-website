import NavbarSample from "../Components/Navbar";

const ErrorScreen = () => {
  // ricordati di fare la pagina di errore XD
  // non dimenticarti del titolo del sito e della favicon
  // bisogna aggiungere anche il componente footer
  // IMPORTANTE: ricorda di aggiungere il link di ringraziamento per icons8 ======================
  return (
    <>
      <NavbarSample />
      <div className="min-h-screen bg-neutral-50 py-16 xl:flex xl:justify-center">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 xl:max-w-[1024px]">
          <div className="space-y-4 bg-red-300 text-center">
            <div className="text-3xl font-semibold">Errore 404</div>
            <p>Pagina non trovata</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorScreen;
