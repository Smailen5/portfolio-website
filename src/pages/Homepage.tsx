import { HomeTemplate } from "@/components/template/HomeTemplate";
import { Layout } from "../components/organisms/Layout";
import useScroll from "../utils/useScroll";

const HomePage = () => {
  useScroll();

  return (
    <Layout>
      <HomeTemplate />
    </Layout>
  );
};

export default HomePage;
