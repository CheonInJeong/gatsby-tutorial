import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, childeren }) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>{data.mdx.frontmatter.date}</p>
      {childeren}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;
export default BlogPost;
