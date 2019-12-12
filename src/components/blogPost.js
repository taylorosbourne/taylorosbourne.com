import React from 'react';
import { PostBody } from '../styles/Post';

const BlogPost = ({ title, date, __html }) => (
  <>
    <br />
    <br />
    <h1>{title}</h1>
    <h4>{date}</h4>
    <PostBody className="post-body" id="main" dangerouslySetInnerHTML={{ __html }} />
  </>
);

export default BlogPost;
