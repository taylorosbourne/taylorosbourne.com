import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PostList from '../components/postList';

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 1.35rem;
  text-decoration: none;
  color: #2aa198;
  border-bottom: 3px rgba(0,0,0,0) dashed;
  :hover {
    border-bottom: 3px #dc322f dashed;
  }
`;

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
      <StyledLink to="/blog">
        <span style={{ color: `#859900` }}>{"("}</span>
        <span style={{ color: `#eee8d5` }}>
          <span style={{ color: `#dc322f` }}>({" "})</span>{" "}
          <span style={{ color: `#b58900` }}>={'>'}</span> tags.
          </span>clearFilters
          <span style={{ color: `#dc322f` }}>{"( )"}</span>
        <span style={{ color: `#859900` }}>{")"}</span>
        <span style={{ color: `#d33682` }}>{"( )"}</span>
        <span style={{ color: `#eee8d5` }}>;</span>
      </StyledLink>
      <br />
      <br />
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
