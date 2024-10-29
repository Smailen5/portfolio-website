type LinkBlank = {
  href: string | undefined;
  children: React.ReactNode;
  isText?: boolean;
};

export const LinkBlank: React.FC<LinkBlank> = ({ href, children, isText }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${isText && "text-accent hover:underline"} focus:border focus:border-primary`}
    >
      {children}
    </a>
  );
};
