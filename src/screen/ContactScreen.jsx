import FormComponent from "../Components/FormComponent";
import NavbarSample from "../Components/Navbar";

const ContactScreen = () => {
  return (
    <>
      <NavbarSample />
      <div className="mt-20 flex min-h-screen flex-col items-center gap-8 bg-red-300 py-16 xl:max-w-[1024px]">
        <h3>Contattami</h3>
        <FormComponent />
      </div>
    </>
  );
};

export default ContactScreen;
