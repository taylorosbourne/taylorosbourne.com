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
  border-radius: 5px;
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
    a {
      margin-left: -25px;
    }
  }
`;

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

const InfoLink = styled.a`
    text-decoration: none;
    color: #173449;
    font-weight: bold;
    font-family: Arial;
    position: relative;
    cursor: pointer;
    :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #173449;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
    }
    :hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1); 
  }
`

// const Card = styled.div`
//   width: 48%;
//   background: rgb(245,245,245);
//   padding: 10px 15px;
//   border-radius: 5px;
//   -webkit-box-shadow: 0 8px 6px -8px black;
// 	   -moz-box-shadow: 0 8px 6px -8px black;
// 	        box-shadow: 0 8px 6px -8px black;
// `

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <br />
    <br />
    <InfoContainer>
      <ImgRounded src={Portrait} alt="portrait" />
      <InfoList>
        <li>
          <span role="img" aria-label="ageAndPronouns">🚀</span> 26-years-old. He/Him
        </li>
        <li>
          <span role="img" aria-label="family">👨‍👩‍👧</span> Husband {"&"} Proud Step-Dad
        </li>
        <li>
          <span role="img" aria-label="job">💻</span> Full-Stack Dev
        </li>
        <li>
          <span role="img" aria-label="hobby">🧰</span> Tinkerer
        </li>
        <li>
          <span role="img" aria-label="gamer">🎮</span> Gamer
        </li>
      </InfoList>
    </InfoContainer>
    <hr/>
    <div style={{
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `flex-start`
    }}>
      <div>
        <h2>Projects</h2>
        <InfoList>
          <li><a style={{color: `#000`}} href="https://www.autoclaimsassistance.com/" target="_blank" rel="noopener noreferrer" alt="aca">www.autoclaimsassistance.com</a></li>
          <li><a style={{color: `#000`}} href="https://www.npmjs.com/package/dad-joke-cli" target="_blank" rel="noopener noreferrer" alt="dadjokecli">Dad-joke-cli</a></li>
          <li><a style={{color: `#000`}} href="https://devdash.netlify.com/" target="_blank" rel="noopener noreferrer" alt="devdash">Devdash</a></li>
          <li><InfoLink href="https://github.com/taylorosbourne" target="_blank" rel="noopener noreferrer" alt="github">Github</InfoLink></li>
        </InfoList>
      </div>
      <div style={{width: `1px`, height: `200px`, background: `rgb(210,210,210)`}}></div>
      <div>
        <h2>Experience</h2>
        <InfoList>
          <li style={{marginLeft: `-25px`}}>Manheim || Software Developer</li>
          <li style={{marginLeft: `-25px`}}>General Assembly || Assistant Instructor</li>
          <li style={{marginLeft: `-25px`}}>Freelance || Developer</li>
          <li><InfoLink href="https://drive.google.com/file/d/1gerQVwoyvV74G8M7NWdpn_zGW7ARWogS/view?usp=sharing" target="_blank" rel="noopener noreferrer" alt="resume">Resume</InfoLink></li>
        </InfoList>
      </div>
    </div>
    <br/>
    <hr/>
    <br/>
    <br/>
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
