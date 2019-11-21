import React from 'react';
import { graphql } from 'gatsby';
import { siteMetadata } from '../../gatsby-config';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Form from '../components/form'
import PostList from '../components/postList';
import GeneralInfo from '../components/generalInfo';
import ExperienceSection from '../components/experience';
import { Tag } from '../styles/Link';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const { title } = siteMetadata;
  return (
    <Layout>
      <SEO title={`${title} - Developer`} />
      <br />
      <GeneralInfo />
      <ExperienceSection />
      <h2 style={{marginTop: `85px`}}>console.blog(<span aria-label="fire" role="img">🔥</span>) <Tag to="/blog" style={{fontSize: `1rem`}}>View All</Tag></h2>
      <PostList posts={posts} />
      <h2 style={{marginTop: `35px`}}>Want to chat? <span aria-label="waving" role="img">👋</span></h2>
      <br/>
      <Form />
    </Layout>
  );
};

export const RECENT_POSTS_QUERY = graphql`
  query RECENT_POSTS_QUERY {
    allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
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
