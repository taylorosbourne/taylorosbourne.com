import React from 'react';
import howLong from '../utils/calculateReadTime';
import previewPost from '../utils/previewPost';
import { StyledGatsbyLink, Tag } from '../styles/Link';
import { PostBody } from '../styles/Post';

const PostList = ({ posts }) => (
  <>
    <br />
    {posts.map((post, i) => {
      const { frontmatter, id, html } = post.node;
      const { path, title, date, tag } = frontmatter;

      return (
        <div
          key={id}
          style={{
            fontFamily: `Arial`,
            maxWidth: `1000px`,
            margin: `0 auto 15px`,
          }}
          id={i === 0 ? 'main' : null}
        >
          <h2 className="article-title">
            <StyledGatsbyLink to={path}>{title}</StyledGatsbyLink>
          </h2>
          <small>
            <span style={{ color: `#6c71c4` }}>{date}</span> Time to{' '}
            <span role="img" aria-label="read">
              📖
            </span>
            : {howLong(html)} minutes
          </small>
          <div>
            <br />
            <PostBody
              className="post-body"
              dangerouslySetInnerHTML={{
                __html: previewPost(html),
              }}
            />
          </div>
          <h5 className="tag" style={{ fontWeight: `300` }}>
            <Tag to={`/${tag}`}>{tag}</Tag>
          </h5>
          <br />
        </div>
      );
    })}
  </>
);

export default PostList;
