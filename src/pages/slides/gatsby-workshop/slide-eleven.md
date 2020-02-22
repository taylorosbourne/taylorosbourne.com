---
workshop: 'Gatsby Workshop'
type: 'slide'
slide: 11
---

## Using our Query in JavaScript

```javascript
index.js 
```

```javascript
import { graphql } from 'gatsby'
```

```javascript
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
          }
        }
      }
    }
  }
`;
```