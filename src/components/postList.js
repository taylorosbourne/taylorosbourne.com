import React from 'react';
import { StyledGatsbyLink, Tag } from '../styles/Link';
import { PostBody } from '../styles/Post';

const PostList = ({ posts }) => (
  <>
    <br />
    {posts.map((post, i) => (
      <div
        key={post.node.id}
        style={{ fontFamily: `Arial`, maxWidth: `1000px`, margin: `0 auto` }}
        id={i === 0 ? 'main' : null}
      >
        <h2 className="article-title">
          <StyledGatsbyLink to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </StyledGatsbyLink>
        </h2>
        <small>
          {post.node.frontmatter.date} Time to{' '}
          <span role="img" aria-label="read">
            📖
          </span>
          : {Math.ceil(post.node.html.split(' ').length / 250)} minutes
        </small>
        <div>
          <br />
          <PostBody
            className="post-body"
            dangerouslySetInnerHTML={{
              __html:
                post.node.html
                  .split(' ')
                  .splice(0, 25)
                  .join(' ') + '...',
            }}
          />
        </div>
        <h5 className="tag">
          Tags:{' '}
          <Tag to={`/${post.node.frontmatter.tag}`}>
            {post.node.frontmatter.tag}
          </Tag>
        </h5>
        <br />
        <br />
      </div>
    ))}
  </>
);

export default PostList;
