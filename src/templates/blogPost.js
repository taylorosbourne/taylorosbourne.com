import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';

const PostBody = styled.div`
  a {
    text-decoration: none;
    color: #173449;
    font-weight: bold;
    font-family: Arial;
    position: relative;
    :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #173449;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
    }
    :hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1); 
  }
}
`;

export default function Template({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Link to="/" style={{ color: `#173449`, textDecoration: `none`, fontWeight: `bold`, fontSize: `30px` }}>&larr;</Link>
      <br />
      <br />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        {post.frontmatter.date}
      </h4>
      <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
};

export const POST_BY_PATH = graphql`
  query POST_BY_PATH($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
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
