import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogPost from '../components/blogPost';

const BlogPostTemplate = ({ data }) => {
  const { html: __html } = data.markdownRemark;
  const { title, date } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <BlogPost __html={__html} title={title} date={date} />
    </Layout>
  );
};

export const POST_BY_PATH = graphql`
  query POST_BY_PATH($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        tag
      }
    }
  }
`;

export default BlogPostTemplate;
