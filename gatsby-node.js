const path = require('path')
// const _ = require('lodash')

<<<<<<< HEAD
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
=======
exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    const templates = {
      posts: path.resolve('src/templates/blogPost.js'),
      // tagPosts: path.resolve('src/templates/tagPosts.js')
    }

>>>>>>> 8ea81e3f5a73e268d4247203cbc64bb620f91b8c
    const postTemplate = path.resolve('src/templates/blogPost.js')
    // const tagTemplate = path.resolve('src/templates/tagPosts.js')

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
                      tag
                    }
                  }
                }
              }
        }
    `).then(res  => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }

<<<<<<< HEAD
        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
=======
        const posts = res.data.allMarkdownRemark.edges
        posts.forEach(({node}) => {
>>>>>>> 8ea81e3f5a73e268d4247203cbc64bb620f91b8c
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })

<<<<<<< HEAD
        // res.data.allMarkdownRemark.edges.forEach(({node}) => {
        //   createPage({
        //     path: node.fronmatter.tag,
        //     component: tagTemplate,
        //     tag: node.frontmatter.tag
        //   })
        // })
=======
        // let tags = []
        // _.each(posts, edge => {
        //   if (_.get(edge, 'node.frontmatter.tags')) {
        //     tags = tags.concat(edge.node.frontmatter.tags)
        //   }
        // })

        // tags = _.uniq(tags)

        // tags.forEach(tag => (
        //   createPage({
        //     path: `/tag/${tag}`,
        //     component: templates.tagPosts,
        //     context: {
        //       tag
        //     }
        //   })
        // ))

>>>>>>> 8ea81e3f5a73e268d4247203cbc64bb620f91b8c
    })
}
