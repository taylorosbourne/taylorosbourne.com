const path = require('path')

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions
    const postTemplate = path.resolve('src/templates/blogPost.js')

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                  node {
                    html
                    id
                    frontmatter {
                      path
                      title
                      date
                      author
                    }
                  }
                }
              }
        }
    `).then(res  => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}

// exports.createPages = ({actions, graphql}) => {
//   const {createPage} = actions
//   const tagPostsTemplate = path.resolve('src/templates/tagPosts.js')

//   return graphql(`
//       {
//           allMarkdownRemark {
//               edges {
//                 node {
//                   html
//                   id
//                   frontmatter {
//                     path
//                     title
//                     date
//                     author
//                     tag
//                   }
//                 }
//               }
//             }
//       }
//   `).then(res  => {
//       if(res.errors) {
//           return Promise.reject(res.errors)
//       }

//       res.data.allMarkdownRemark.edges.forEach(({node}) => {
//           createPage({
//               path: node.frontmatter.tag,
//               tag: node.frontmatter.tag,
//               component: tagPostsTemplate
//           })
//       })
//   })
// }