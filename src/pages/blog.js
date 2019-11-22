import React from 'react';
import { graphql } from 'gatsby';
import { siteMetadata } from '../../gatsby-config';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostList from '../components/postList';
import { Tag } from '../styles/Link';

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const { title } = siteMetadata;
  const tagsArr = posts.map((post, i) => {
    return post.node.frontmatter.tag;
  });
  const uniqueTags = [...new Set(tagsArr)];
  return (
    <Layout>
      <SEO title={`${title} - Blog`} />
      <br />
      <br />
      {uniqueTags && uniqueTags.sort().map((tag, i) => (
        <Tag 
          to={`/${tag}`} 
          style={{
            marginRight: `5px`,
            fontWeight: `700`
          }}
          key={i}
          >
            {tag}
          </Tag>
        )
      )}
      <br />
      <br />
      <PostList posts={posts} />
    </Layout>
  );
};

export const ALL_POSTS_QUERY = graphql`
  query ALL_POSTS_QUERY {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

export default Blog;
