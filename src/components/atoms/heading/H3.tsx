export const H3 = ({ children }: { children: string }) => {
  return (
    <h3 className="text-base-content relative inline-block text-xl font-semibold capitalize">
      <span className="relative z-[10]">{children}</span>
      <span className="bg-primary absolute bottom-0 left-0 h-[2px] w-full"></span>
    </h3>
  );
};
