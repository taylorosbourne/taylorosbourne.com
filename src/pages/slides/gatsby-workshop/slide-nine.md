---
workshop: 'Gatsby Workshop'
type: 'slide'
slide: 9
---

## Install the transformer

install the transformer

```bash
npm install --save gatsby-transformer-remark
```

and add it to your gatsby-config.js

```javascript
gatsby-config.js
```

```javascript
plugins: [
  `gatsby-transformer-remark`,
  {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
]
```