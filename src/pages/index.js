import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="home page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage
        alt="cute cat named dongggeul"
        src="../images/cute_cat.jpeg"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="Home page" />;

export default IndexPage;
