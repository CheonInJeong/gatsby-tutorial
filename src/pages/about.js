import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>Hi there! I'm ij and junior Web dev! 😀</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About me" />;

export default AboutPage;
