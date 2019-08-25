import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout';

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Link to="/" style={{color: `#173449`, textDecoration: `none`, fontWeight: `bold`, fontSize: `30px`}}>&larr;</Link>
      <br />
      <br />
      {/* <hr /> */}
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

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
`