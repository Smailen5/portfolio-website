import spinner from '@/assets/icons/svg-spinners--6-dots-rotate.svg';

export const Loading = () => {
  return (
    <section
      aria-labelledby="loading"
      className="flex h-96 items-center justify-center"
    >
      <p id="loading" className="sr-only">
        Caricamento in corso, attendi
      </p>
      <img src={spinner} alt="spinner icon" className="size-10" />
    </section>
  );
};
