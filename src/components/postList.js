import React from 'react';
import howLong from '../utils/calculateReadTime';
import previewPost from '../utils/previewPost';
import { StyledGatsbyLink, Tag } from '../styles/Link';
import { PostBody } from '../styles/Post';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

const Post = styled.div`
  font-family: Arial;
  max-width: 44%;
  @media (max-width: 800px) {
    max-width: 100%;
    width: 100%;
  }
`;

const PostList = ({ posts }) => (
  <>
    <br />
    <PostContainer>
      {posts.map((post, i) => {
        const { frontmatter, id, html } = post.node;
        const { path, title, date, tag } = frontmatter;
        return (
          <Post key={id} id={i === 0 ? 'main' : null}>
            <h2 className="article-title">
              <StyledGatsbyLink
                to={path}
                style={{ fontWeight: `200`, fontSize: `1.5rem` }}
              >
                {title}
              </StyledGatsbyLink>
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
          </Post>
        );
      })}
    </PostContainer>
  </>
);

export default PostList;
