// import React from 'react'
// import { graphql } from 'gatsby'
// import Link from 'gatsby-link'
// import Layout from '../components/layout'

// const tagPosts = ({ data, pageContext }) => {
//     return (
//         <Layout>
//             <br />
//             <br />
//             {data.allMarkdownRemark.edges.map(post => (
//                 <div key={post.node.id} style={{ fontFamily: `Arial`, maxWidth: `1000px`, margin: `0 auto` }}>
//                     <h1><Link style={{
//                         textDecoration: `none`,
//                         color: `#173449`,
//                         fontWeight: `bold`,
//                         fontFamily: `Arial`,
//                     }} to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></h1>
//                     <small>
//                         {post.node.frontmatter.date}
//                     </small>
//                     <br />
//                     <br />
//                     <p>
//                         <div dangerouslySetInnerHTML={{ __html: post.node.html.slice(0, 500) + '...' }} />
//                     </p>
//                     <Link style={{
//                         textDecoration: `none`,
//                         color: `#173449`,
//                         fontWeight: `bold`,
//                         fontFamily: `Arial`,
//                         fontSize: `20px`
//                     }} to={post.node.frontmatter.path}>Read More</Link>
//                     <br />
//                     <br />
//                     <h5>Tags: <span style={{
//                         background: `rgb(242,242,242)`,
//                         padding: `10px`,
//                         borderRadius: `5px`
//                     }}>{post.node.frontmatter.tag}</span></h5>
//                     <br />
//                     <br />
//                 </div>
//             ))}
//         </Layout>
//     )
// }

// export const TAG_QUERY = graphql`
// query($tag: String!) {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { tag: { in: [$tag] } } }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date
//             author
//             tag
//           }
//         }
//       }
//     }
//   }
// `

// export default tagPosts;
