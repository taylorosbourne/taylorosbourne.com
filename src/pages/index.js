import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <br />
    <br />
    {data.allMarkdownRemark.edges.reverse().map(post => (
      <div key={post.node.id} style={{fontFamily: `Arial`, maxWidth: `1000px`, margin: `0 auto`}}>
        <h1>{post.node.frontmatter.title}</h1>
        <small>
          {post.node.frontmatter.author}: posted on{' '}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link style={{
          textDecoration: `none`,
          color: `#173449`,
          fontWeight: `bold`,
          fontFamily: `Arial`,
          fontSize: `20px`
        }} to={post.node.frontmatter.path}>Read</Link>
        <br />
        <br />
        <h5>Tags: <span style={{
          background: `rgb(242,242,242)`,
          padding: `10px`,
          borderRadius: `5px`
        }}>{post.node.frontmatter.tag}</span></h5>
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


