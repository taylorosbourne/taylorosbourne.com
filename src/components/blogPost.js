import React from 'react';
import { Link } from 'gatsby';
import { PostBody } from '../styles/Post';

const BlogPost = ({ title, date, __html }) => (
  <>
    <Link
      to="/"
      style={{
        color: `#173449`,
        textDecoration: `none`,
        fontWeight: `bold`,
        fontSize: `30px`,
      }}
    >
      &larr;
    </Link>
    <br />
    <br />
    <h1>{title}</h1>
    <h4>{date}</h4>
    <PostBody id="main" dangerouslySetInnerHTML={{ __html }} />
  </>
);

export default BlogPost;
