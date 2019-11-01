import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Portrait from '../images/portrait.jpg';
import { StyledLink } from '../styles/Link';
import { PostBody } from '../styles/Post';

const ImgRounded = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

const InfoContainer = styled.div`
  margin: 55px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const InfoList = styled.ul`
  li {
    list-style: none;
    line-height: 1;
  }
`;

export const Tag = styled(Link)`
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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <br />
    <br />
    <InfoContainer>
      <ImgRounded src={Portrait} alt="portrait" />
      <InfoList>
        <li>
          <span role="img" aria-label="ageAndPronouns">🙆‍♂️</span> 26. He/Him
        </li>
        <li>
          <span role="img" aria-label="family">👨‍👩‍👧</span> Husband {"&"} Proud Step-Dad
        </li>
        <li>
          <span role="img" aria-label="job">💻</span> Full-Stack Dev
        </li>
        <li>
          <span role="img" aria-label="hobby">🧰</span> Avid-tinkerer
        </li>
        <li>
          <span role="img" aria-label="gamer">🎮</span> Gamer
        </li>
      </InfoList>
    </InfoContainer>
    {data.allMarkdownRemark.edges.map(post => (
      <div
        key={post.node.id}
        style={{ fontFamily: `Arial`, maxWidth: `1000px`, margin: `0 auto` }}
      >
        <h1>
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
        </h1>
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
        <p>
          <PostBody
            dangerouslySetInnerHTML={{
              __html: post.node.html.slice(0, 550) + "...",
            }}
          />
        </p>
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
        <br />
      </div>
    ))}
  </Layout>
);

export const ALL_POSTS_QUERY = graphql`
  query ALL_POSTS_QUERY {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
            date
            author
            tag
          }
        }
      }
    }
  }
`;

export default IndexPage;
