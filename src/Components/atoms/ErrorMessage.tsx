interface ErrorMessageProps {
  children: string;
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="rounded-md bg-destructive p-3 text-destructive-foreground"
    >
      <p>{children}</p>
    </div>
  );
};
