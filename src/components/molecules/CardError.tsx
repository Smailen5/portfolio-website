export const CardError = () => {
  return (
    <div className="bg-base-300 flex w-full flex-col items-center rounded-2xl p-4">
      <p className="mb-4">
        Errore nel recupero dei progetti. Riprova piu&apos; tardi.
      </p>
      <button className="btn btn-accent">Riprova</button>
    </div>
  );
};
