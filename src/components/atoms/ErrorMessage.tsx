interface ErrorMessageProps {
  children: string;
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="bg-destructive text-destructive-foreground rounded-md p-3"
    >
      <p>{children}</p>
    </div>
  );
};
