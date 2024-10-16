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
      className={`${isText && "text-blue-500 hover:underline"}`}
    >
      {children}
    </a>
  );
};
