import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="home page">
      <p>I'm making this by following the Gatsby tutorial.</p>
    </Layout>
  );
};

export const Head = () => <title>HomePage</title>;

export default IndexPage;
