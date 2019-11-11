import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Layout from '../components/layout'
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

const tagPosts = ({ data, pageContext }) => {
    return (
        <Layout>
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
                    <small>
                        {post.node.frontmatter.date}
                    </small>
                    <br />
                    <br />
                    <p>
                        <PostBody dangerouslySetInnerHTML={{ __html: post.node.html.slice(0, 500) + '...' }} />
                    </p>
                    <Link style={{
                        textDecoration: `none`,
                        color: `#173449`,
                        fontWeight: `bold`,
                        fontFamily: `Arial`,
                        fontSize: `20px`
                    }} to={post.node.frontmatter.path}>Read More</Link>
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
    )
}

export const TAG_QUERY = graphql`
  query POST_BY_TAG($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tag: {in: [$tag] } } }
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
`

export default tagPosts;
