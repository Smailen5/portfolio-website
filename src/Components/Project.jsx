const Project = () => {
  return (
    <>
      {/* PROGETTO SINGOLO */}
      <div className="flex gap-4 overflow-hidden rounded-md bg-white">
        {/* immagine */}
        <div className="size-40 h-full bg-red-500 md:size-60">img</div>
        {/* contenitore nome progetto e descrizione */}
        <div className="flex-1 space-y-2 bg-teal-300 text-left">
          <h3 className="text-2xl">nome progetto</h3>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
            illum!
          </p>
          {/* array delle tecnologie utilizzate */}
          <div>tecnologie usate</div>
        </div>
      </div>
    </>
  );
};

export default Project;
