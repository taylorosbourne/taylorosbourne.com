const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  };
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/blogPost.js');
  const tagTemplate = path.resolve('src/templates/tagPosts.js');

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
    `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    };

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const posts = res.data.allMarkdownRemark.edges;
      posts.forEach(({
        node
      }) => {

        createPage({
          path: node.frontmatter.path,
          component: postTemplate
        });
      });

      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.tag,
          component: tagTemplate,
          context: {
            tag: node.frontmatter.tag
          }
        });
      });
    });
  });
};
