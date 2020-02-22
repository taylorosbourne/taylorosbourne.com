---
workshop: 'Gatsby Workshop'
type: 'slide'
slide: 13
---

## Rendering Our List

```javascript
index.js
```

```javascript
import PostList from "../components/postList"
```

```javascript
const posts = data.allMarkdownRemark.edges;
```

```javascript
<PostList posts={posts} />
```