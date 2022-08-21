import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My blog posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
export const Head = () => <Seo title="My blog posts" />;
export default BlogPage;
