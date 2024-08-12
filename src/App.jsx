// import Hero from "./Components/Hero";
// import NavbarSample from "./Components/Navbar";
// import FormComponent from "./Components/FormComponent";
// import Presentation from "./Components/Presentation";
// import Skills from "./Components/Skills";
// import Socials from "./Components/Socials";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

{/* <NavbarSample />
      <div className="min-h-screen bg-blue-300 pt-16">
        <div className="flex flex-col justify-around gap-20 mt-20 px-8">
          <Hero />
          <Presentation />
          <Skills />
          <Socials />
          <FormComponent />
        </div>
      </div> */}