import { Layout } from "@/components/organisms/Layout";
import { HomeTemplate } from "@/components/templates/HomeTemplate";
import useScroll from "@/utils/useScroll";

const HomePage = () => {
  useScroll();

  return (
    <Layout>
      <HomeTemplate />
    </Layout>
  );
};

export default HomePage;
