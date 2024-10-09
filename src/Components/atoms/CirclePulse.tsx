const CirclePulse = () => {
  return (
    <div className="relative">
      <div className="absolute size-4 animate-ping rounded-full bg-green-600/60 duration-1000" />
      <div className="size-4 rounded-full bg-green-600" />
    </div>
  );
};

export default CirclePulse;
