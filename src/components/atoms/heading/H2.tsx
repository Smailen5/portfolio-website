export const H2 = ({
  children,
  screenReaderOnly,
  textCenter,
}: {
  children: string;
  screenReaderOnly?: boolean;
  textCenter?: boolean;
}) => {
  return (
    <h2
      className={`text-secondary text-2xl font-bold capitalize ${screenReaderOnly ? 'sr-only' : ''} ${textCenter ? 'text-center' : ''}`}
    >
      {children}
    </h2>
  );
};
