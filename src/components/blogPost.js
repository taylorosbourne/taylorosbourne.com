import React from 'react';
import GeneralInfo from '../components/generalInfo';
import { PostBody } from '../styles/Post';

const BlogPost = ({ title, date, __html }) => (
  <>
    <br />
    <br />
    <h1 style={{fontWeight: `200`, color: `#b58900`}}>{title}</h1>
    <h4 style={{fontWeight: `200`, color: `#6c71c4`}}>{date}</h4>
    <PostBody
      className="post-body"
      id="main"
      dangerouslySetInnerHTML={{ __html }}
    />
    <GeneralInfo />
  </>
);

export default BlogPost;
