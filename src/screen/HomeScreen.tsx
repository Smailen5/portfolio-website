// import Footer from "../Components/organisms/Footer";
// import Hero from "../Components/organisms/Hero";
// import NavbarSample from "../Components/organisms/Navbar";
// import Skills from "../Components/molecules/Skills";
import { Layout } from "../Components/organisms/Layout";
// import Presentation from "../Components/organisms/Presentation";
// import Socials from "../Components/organisms/Socials";
import useScroll from "../utils/useScroll";
import { HomeTemplate } from "@/Components/template/HomeTemplate";

const HomeScreen = () => {
  useScroll();

  return (
    <Layout>
      <HomeTemplate />
    </Layout>
  );
};

export default HomeScreen;
