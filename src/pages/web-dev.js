import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledLink } from '../styles/Link';
import { PostBody } from '../styles/Post';

const WebDevPosts = ({ data }) => (
  <Layout>
    <SEO title="Web-Dev" />
    <br />
    <br />
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id} style={{ fontFamily: `Arial`, maxWidth: `1000px`, margin: `0 auto` }}>
        <h1><Link style={{
          textDecoration: `none`,
          color: `#173449`,
          fontWeight: `bold`,
          fontFamily: `Arial`,
        }} to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></h1>
        <h4>Time to <span role="img" aria-label="read">📖</span>: {Math.ceil(post.node.html.split(' ').length / 250)} minutes</h4>
        <small>
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <p>
          <PostBody dangerouslySetInnerHTML={{ __html: post.node.html.slice(0, 500) + '...' }} />
        </p>
        <StyledLink to={post.node.frontmatter.path}>Read More</StyledLink>
        <br />
        <br />
        <h5>Tags: <span style={{
          background: `rgb(242,242,242)`,
          padding: `10px`,
          borderRadius: `5px`
        }}>{post.node.frontmatter.tag}</span></h5>
        <br />
        <br />
      </div>
    ))}
  </Layout>
);

export const WEB_DEV_POSTS = graphql`
query WEB_DEV_POSTS {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {tag: {eq: "web-dev"}}}) {
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

export default WebDevPosts;