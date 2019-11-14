import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portrait from "../images/portrait.jpg"
import PostList from "../components/postList"

const ImgRounded = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 5px;
`

const InfoContainer = styled.div`
  margin: 55px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const InfoList = styled.ul`
  li {
    list-style: none;
    line-height: 1;
    a {
      margin-left: -25px;
    }
  }
`

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

const ExperienceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 0 auto;
  }
`

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
`

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <br />
      <InfoContainer>
        <ImgRounded src={Portrait} alt="portrait" />
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
              <InfoLink
                href="https://github.com/taylorosbourne"
                target="_blank"
                rel="noopener noreferrer"
                alt="github"
              >
                Github
              </InfoLink>
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
              <InfoLink
                href="https://drive.google.com/file/d/1gerQVwoyvV74G8M7NWdpn_zGW7ARWogS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                alt="resume"
              >
                Resume
              </InfoLink>
            </li>
          </InfoList>
        </Card>
      </ExperienceSection>
      <br />
      <PostList posts={posts} />
    </Layout>
  )
}

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
`

export default IndexPage
