import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { siteMetadata } from '../../gatsby-config';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostList from '../components/postList';
import GeneralInfo from '../components/generalInfo';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Array<{node}>
    }
  }
}

const IndexPage: FC<Props> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const { title } = siteMetadata;
  return (
    <Layout>
      <SEO title={`${title} - Developer`} />
      <br />
      <GeneralInfo resume={false} />
      <PostList posts={posts} />
    </Layout>
  );
};

export const RECENT_POSTS_QUERY = graphql`
  query RECENT_POSTS_QUERY {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "post"}}}
      sort: { fields: [frontmatter___date], order: DESC }
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

export default IndexPage;
