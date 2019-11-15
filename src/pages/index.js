import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Form from '../components/form'
import PostList from '../components/postList';
import { StyledAnchorLink } from '../styles/Link';

const InfoContainer = styled.div`
  margin: 55px auto 35px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Spiel = styled.div`
  max-width: 50%;
  @media (max-width: 700px) {
    max-width: 90%;
    margin: 0 auto;
  }
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

const ExperienceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  width: 48%;
  background: rgb(245, 245, 245);
  padding: 10px 15px;
  border-radius: 5px;
  transition: transform 0.3s ease;
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media (max-width: 700px) {
    width: 100%;
    margin: 15px auto;
  }
`;

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <br />
      <InfoContainer>
        <Spiel>
          <h1 style={{ marginTop: 0 }}>Hi, I'm Taylor</h1>
          <p style={{ lineHeight: `1.5`, fontSize: `20px` }}>I'm a full-stack Javascript Dev with a soft-spot for Ruby.  I like to write about being a developer today.</p>
        </Spiel>
        <InfoList>
          <li>
            <span role="img" aria-label="ageAndPronouns">
              🚀
            </span>{" "}
            26-years-old. He/Him
          </li>
          <li>
            <span role="img" aria-label="family">
              👨‍👩‍👧
            </span>{" "}
            Husband {"&"} Proud Step-Dad
          </li>
          <li>
            <span role="img" aria-label="job">
              💻
            </span>{" "}
            Full-Stack Dev
          </li>
          <li>
            <span role="img" aria-label="hobby">
              🧰
            </span>{" "}
            Tinkerer
          </li>
          <li>
            <span role="img" aria-label="gamer">
              🎮
            </span>{" "}
            Gamer
          </li>
        </InfoList>
      </InfoContainer>
      <ExperienceSection>
        <Card>
          <h2>Projects</h2>
          <InfoList>
            <li>
              <a
                id="main"
                style={{ color: `#000` }}
                href="https://www.autoclaimsassistance.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="aca"
              >
                www.autoclaimsassistance.com
              </a>
            </li>
            <li>
              <a
                style={{ color: `#000` }}
                href="https://www.npmjs.com/package/dad-joke-cli"
                target="_blank"
                rel="noopener noreferrer"
                alt="dadjokecli"
              >
                Dad-joke-cli
              </a>
            </li>
            <li>
              <a
                style={{ color: `#000` }}
                href="https://devdash.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="devdash"
              >
                Devdash
              </a>
            </li>
            <li>
              <StyledAnchorLink
                href="https://github.com/taylorosbourne"
                target="_blank"
                rel="noopener noreferrer"
                alt="github"
              >
                Github
              </StyledAnchorLink>
            </li>
          </InfoList>
        </Card>
        <Card>
          <h2>Experience</h2>
          <InfoList>
            <li style={{ marginLeft: `-25px` }}>
              Manheim || Software Developer
            </li>
            <li style={{ marginLeft: `-25px` }}>
              General Assembly || Assistant Instructor
            </li>
            <li style={{ marginLeft: `-25px` }}>Freelance || Developer</li>
            <li>
              <StyledAnchorLink
                href="https://drive.google.com/file/d/1gerQVwoyvV74G8M7NWdpn_zGW7ARWogS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                alt="resume"
              >
                Resume
              </StyledAnchorLink>
            </li>
          </InfoList>
        </Card>
      </ExperienceSection>
      <h2 style={{marginTop: `85px`}}>console.blog(<span aria-label="fire" role="img">🔥</span>)</h2>
      <PostList posts={posts} />
      <h2 style={{marginTop: `35px`}}>Want to chat?</h2>
      <Form />
    </Layout>
  );
};

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
