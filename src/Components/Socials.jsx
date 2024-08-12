const Socials = () => {
  return (
    <section className="h-scree mx-auto flex w-3/4 flex-col gap-8">
      <h3 className="text-center text-2xl font-semibold">Social</h3>
      <div className="justify-cente flex h-full w-full flex-col justify-start gap-8 px-8 md:grid md:grid-cols-3">
        <div className="flex items-center justify-center bg-green-300 p-4">
          Linkedin
        </div>
        <div className="flex items-center justify-center bg-green-300 p-4">
          Github
        </div>
        <div className="flex items-center justify-center bg-green-300 p-4">
          Frontend Mentor
        </div>
      </div>
    </section>
  );
};

export default Socials;
