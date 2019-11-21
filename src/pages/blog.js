import React from "react"
import { graphql } from "gatsby"
import { siteMetadata } from "../../gatsby-config"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"

const Blog = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    const { title } = siteMetadata;
    return (
        <Layout>
        <SEO title={`${title} - Blog`} />
        <PostList posts={posts} />
        </Layout>
    )
}

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
`

export default Blog
