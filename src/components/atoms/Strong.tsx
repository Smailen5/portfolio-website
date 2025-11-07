const Strong = ({ children }: { children: string }) => {
  return (
    <span className="before:bg-accent relative px-1 before:absolute before:inset-0 before:-skew-x-10 before:rounded-xs before:content-['']">
      <strong className="text-accent-content relative z-10">{children}</strong>
    </span>
  );
};

export default Strong;
