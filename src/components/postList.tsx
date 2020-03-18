import React, { FC } from 'react';

import howLong from '../utils/howlLong';
import { StyledGatsbyLink, Tag } from '../styles/Link';

interface Post {
  node: {
    id: string;
    html: string;
    frontmatter: {
      path: string;
      title: string;
      date: string;
      tag: string;
    }
  }
}

interface Props {
  posts: Post[];
}

const PostList: FC<Props> = ({ posts }) => (
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
          <h3 className="article-title">
            <StyledGatsbyLink to={path}>{title}</StyledGatsbyLink>
          </h3>
          <small>
            <span style={{ color: `#6c71c4` }}>{date}</span> Time to{' '}
            <span role="img" aria-label="read">
              📖
            </span>
            : {howLong(html)} minutes
          </small>
            <Tag to={`/${tag}`}># {tag}</Tag>
          <br />
        </div>
      );
    })}
  </>
);

export default PostList;
