import imag from "../assets/images/base-apparel-desktop.jpeg";

const Project = () => {
  return (
    <>
      {/* PROGETTO SINGOLO */}
      <div className="bg-whit flex flex-col gap-4">
        {/* immagine */}
        <img src={imag} className="rounded-md" />
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
