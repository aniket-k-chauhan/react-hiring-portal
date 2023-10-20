import type { NextPage } from "next";
import Layout from "../components/Layout";
import DataProvider from "../containers/home/DataProvider";
import TabProvider from "@src/containers/home/TabProvider";
import HomeLayout from "@src/containers/home/HomeLayout";

const Home: NextPage = () => {
  return (
    <Layout title="Settings">
      <DataProvider>
        <TabProvider>
          <HomeLayout />
        </TabProvider>
      </DataProvider>
    </Layout>
  );
};

export default Home;
