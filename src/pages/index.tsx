import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { siteMetadata } from '../../gatsby-config';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostList from '../components/postList';
import GeneralInfo from '../components/generalInfo';
import WorkshopList from '../components/workshopList';

const SectionHeader = styled.h2`
  margin-top: 0;
  font-weight: 200;
  color: #b58900;
  border-bottom: 3px #dc322f dashed;
  display: inline-block;
  padding-bottom: 5px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-right: 15px;
  text-decoration: none;
  border-bottom: 3px rgba(0,0,0,0) dashed;
  color: #b58900;
  :hover {
    border-bottom: 3px #dc322f dashed;
  }
`;

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
      <SectionHeader>Recent Articles</SectionHeader>
      <PostList posts={posts} />
      <StyledLink to="/blog">view all</StyledLink>
      <br />
      <br />
      <br />
      <SectionHeader>Workshops</SectionHeader>
      <WorkshopList />
    </Layout>
  );
};

export const RECENT_POSTS_QUERY = graphql`
  query RECENT_POSTS_QUERY {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "post"}}}
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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
