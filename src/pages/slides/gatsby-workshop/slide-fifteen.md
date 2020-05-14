---
workshop: 'Gatsby Workshop'
type: 'slide'
slide: 15
link: 'gatsby-workshop'
date: '2020-02-22'
duration: 3
---

## Gatsby Node

```javascript
gatsby-node.js
```

```javascript
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve('src/templates/blogPost.js'),
    });
  });
};

```