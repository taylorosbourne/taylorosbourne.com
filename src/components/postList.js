import React from 'react';
import { Link } from 'gatsby';
import { StyledGatsbyLink, Tag } from '../styles/Link';
import { PostBody } from '../styles/Post';

const PostList = ({ posts }) => (
  <>
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
        <StyledGatsbyLink to={post.node.frontmatter.path}>Read More</StyledGatsbyLink>
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
