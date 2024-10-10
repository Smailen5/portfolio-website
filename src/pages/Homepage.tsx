import { HomeTemplate } from "@/Components/template/HomeTemplate";
import { Layout } from "../Components/organisms/Layout";
import useScroll from "../utils/useScroll";

const HomeScreen = () => {
  useScroll();

  return (
    <Layout>
      <HomeTemplate />
    </Layout>
  );
};

export default HomeScreen;
