---
workshop: 'Gatsby Workshop'
type: 'slide'
slide: 13
link: 'gatsby-workshop'
date: '2020-02-22'
duration: 3
---

## Rendering Our List

```javascript
index.js
```

```javascript
import PostList from '../components/postList';
```

```javascript
const posts = data.allMarkdownRemark.edges;
```

```javascript
<PostList posts={posts} />
```