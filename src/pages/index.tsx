import Layout from "@/layout/layout";
import { NextPageWithLayout } from "./_app";
import Home from "@/components/Home";



const Index: NextPageWithLayout = () => {
  return (
    <>
        <Home />
    </>
  );
};

Index.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Index;