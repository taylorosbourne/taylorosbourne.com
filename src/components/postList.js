import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StyledLink } from '../styles/Link';
import { PostBody } from '../styles/Post';

const Tag = styled(Link)`
  background: rgb(242, 242, 242);
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: #173449;
  font-family: Arial;
  transition: all 0.1s ease-in-out;
  :hover {
    background: #173449;
    color: rgb(242, 242, 242);
  }
`;

const PostList = ({ posts }) => (
  <>
    <br />
    <br />
    {posts.map((post, i) => (
      <div
        key={post.node.id}
        style={{ fontFamily: `Arial`, maxWidth: `1000px`, margin: `0 auto` }}
      >
        <h2>
          <Link
            style={{
              textDecoration: `none`,
              color: `#173449`,
              fontWeight: `bold`,
              fontFamily: `Arial`,
            }}
            to={post.node.frontmatter.path}
          >
            {post.node.frontmatter.title}
          </Link>
        </h2>
        <h4>
          Time to{" "}
          <span role="img" aria-label="read">
            📖
            </span>
          : {Math.ceil(post.node.html.split(" ").length / 250)} minutes
          </h4>
        <small>{post.node.frontmatter.date}</small>
        <br />
        <br />
        <div>
          <PostBody
            dangerouslySetInnerHTML={{
              __html: post.node.html.slice(0, 200) + "...",
            }}
          />
        </div>
        <StyledLink to={post.node.frontmatter.path}>Read More</StyledLink>
        <br />
        <br />
        <h5>
          Tags:{" "}
          <Tag to={`/${post.node.frontmatter.tag}`}>
            {post.node.frontmatter.tag}
          </Tag>
        </h5>
        <br />
        {i === posts.length - 1 ? null : <hr />}
        <br />
      </div>
    ))}
  </>
);

export default PostList;
