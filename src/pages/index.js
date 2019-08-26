import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Tag = styled(Link)`
  background: rgb(242,242,242);
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: #173449;
  font-family: Arial;
  transition: all 0.1s ease-in-out;
  :hover {
    background: #173449;
    color: rgb(242,242,242);
  }
`

const IndexPage = ({ data }) => (

  <Layout>
    <SEO title="Home" />
    <br />
    <br />
    {data.allMarkdownRemark.edges.reverse().map(post => (
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
          <div dangerouslySetInnerHTML={{ __html: post.node.html.slice(0, 500) + '...' }} />
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
        <h5>Tags: <Tag to={`/${post.node.frontmatter.tag}`}>{post.node.frontmatter.tag}</Tag></h5>
        <br />
        <br />
        {/* <hr /> */}
      </div>
    ))}
  </Layout>
)

export const ALL_POSTS_QUERY = graphql`
  query ALL_POSTS_QUERY {
    allMarkdownRemark {
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

export default IndexPage


