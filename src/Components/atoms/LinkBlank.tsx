type LinkBlank = {
  href: string;
  children: React.ReactNode;
};

export const LinkBlank: React.FC<LinkBlank> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 underline"
    >
      {children}
    </a>
  );
};
