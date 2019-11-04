const path = require('path')
// const _ = require('lodash')

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    const templates = {
      posts: path.resolve('src/templates/blogPost.js'),
      // tagPosts: path.resolve('src/templates/tagPosts.js')
    }

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

        const posts = res.data.allMarkdownRemark.edges
        posts.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })

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

    })
}
