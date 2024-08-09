import Hero from "./Components/Hero";
import NavbarSample from "./Components/Navbar";

function App() {
  return (
    <>
      <NavbarSample />
      <div className="min-h-screen bg-blue-300 pt-16">
        <Hero />
      </div>
    </>
  );
}

export default App;
