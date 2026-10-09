interface CardErrorProps {
  onRetry: () => void;
}

export const CardError = ({ onRetry }: CardErrorProps) => {
  return (
    <div className="bg-base-300 border-primary/40 flex w-full flex-col items-center rounded-lg border p-4">
      <p className="mb-4">
        Errore nel recupero dei progetti. Riprova piu&apos; tardi.
      </p>
      <button
        className="btn btn-primary rounded-md text-base font-bold"
        onClick={onRetry}
      >
        Riprova
      </button>
    </div>
  );
};
