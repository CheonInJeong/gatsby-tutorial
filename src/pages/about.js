import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>Hi there! I'm ij and junior Web dev! 😀</p>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
