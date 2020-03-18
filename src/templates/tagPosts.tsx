import React, { FC } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import GeneralInfo from '../components/generalInfo';
import PostList from '../components/postList';

interface Props {
  data: {
    allMarkdownRemark: {
      edges
    }
  }
}

const TagPostsTemplate: FC<Props> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <br />
      <br />
      <GeneralInfo resume={false} />
      <PostList posts={posts} />
    </Layout>
  );
};

export const POSTS_BY_TAG = graphql`
  query POSTS_BY_TAG($tag: String!) {
    allMarkdownRemark(
      filter: {frontmatter: {tag: {eq: $tag}}}, 
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            author
            date
            path
            tag
            title
          }
        }
      }
    }
  }
`;

export default TagPostsTemplate;
