---
workshop: 'Gatsby Workshop'
type: 'slide'
slide: 16
link: 'gatsby-workshop'
date: '2020-02-22'
duration: 3
---

## Adding Style with JavaScript

```bash
npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components
```

```javascript
src/components/layout.js
```

```javascript
const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;
```