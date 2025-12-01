export const H2 = ({
  children,
  screenReaderOnly,
}: {
  children: string;
  screenReaderOnly?: boolean;
}) => {
  return (
    <h2
      className={`text-secondary text-2xl font-bold capitalize ${screenReaderOnly && 'sr-only'}`}
    >
      {children}
    </h2>
  );
};
