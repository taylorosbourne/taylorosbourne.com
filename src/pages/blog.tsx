import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { siteMetadata } from '../../gatsby-config';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostList from '../components/postList';

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 0px 15px;
  font-size: 1.35rem;
  text-decoration: none;
  color: #b58900;
  border-bottom: 3px rgba(0,0,0,0) dashed;
  :hover {
    border-bottom: 3px #dc322f dashed;
  }
`;

const Brackets = styled.span`
  font-size: 2rem;
  border-bottom: 3px rgba(0,0,0,0) dashed;
  color: rgb(108, 113, 196);
`;

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Array<{ node }>
    }
  }
}

const BlogPage: FC<Props> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  const { title } = siteMetadata;

  const tagsArr = posts.map(post => {
    return post.node.frontmatter.tag;
  });

  const uniqueTags = [...new Set(tagsArr)];

  return (
    <Layout>
      <SEO title={`${title} - Developer`} />
      <br />
      <br />
      <div style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `flex-start`,
        minWidth: `500px`,
        flexWrap: `wrap`
      }}>
        <span style={{fontSize: `1.35rem`}}><span style={{color: `#268bd2`}}>const</span> tags = </span>
        <Brackets>{"["}</Brackets>
        {uniqueTags.map((tag, i) => {
          return (
            <StyledLink to={`/${tag}`} key={i}>{tag}{i === uniqueTags.length - 1 ? "" : ","}</StyledLink>
          );
        })}
        <Brackets>{"]"}</Brackets>
      </div>
      <br />
      <PostList posts={posts} />
    </Layout>
  );
};

export const ALL_POSTS_QUERY = graphql`
  query ALL_POSTS_QUERY {
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

export default BlogPage;
