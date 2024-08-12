import FormComponent from "../Components/FormComponent";
import NavbarSample from "../Components/Navbar";

const ContactScreen = () => {
  return (
    <>
      <NavbarSample />
      <div className="flex min-h-screen justify-center bg-red-300 py-16">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 text-center xl:max-w-[1024px]">
          <h3>Contattami</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis fuga molestias a dolorum eos, vitae laudantium nulla
            eligendi, hic necessitatibus sapiente.
          </p>
          <FormComponent />
        </div>
      </div>
    </>
  );
};

export default ContactScreen;
