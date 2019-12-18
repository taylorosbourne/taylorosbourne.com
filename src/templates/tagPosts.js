import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const TagPostsTemplate = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <br />
      <br />
      <PostList posts={posts} />
    </Layout>
  );
};

export const TAG_QUERY = graphql`
  query POST_BY_TAG($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tag: { in: [$tag] } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
            date
            author
            tag
          }
        }
      }
    }
  }
`;

export default TagPostsTemplate;
