import { Layout } from "@components/molecules/Layout";
import { HomeTemplate } from "@/components/templates/HomeTemplate";
import useScroll from "@/shared/hooks/useScroll";

const HomePage = () => {
  useScroll();

  return (
    <Layout>
      <HomeTemplate />
    </Layout>
  );
};

export default HomePage;
