import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #173449;
    font-weight: bold;
    font-family: Arial;
    position: relative;
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

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{
      maxWidth: `1000px`,
      margin: `0 auto`,
      textAlign: `center`,
      height: `60vh`,
      marginTop: `150px`
    }}>
      <h1 style={{fontSize: `150px`}}>UH-OH</h1>
      <h1 style={{fontSize: `100px`}}><span role="img" aria-label="facepalm">🤦‍♂️</span></h1>
      <p>You fucked up</p>
      <p>back to the <StyledLink to="/">articles</StyledLink></p>
    </div>
  </Layout>
)

export default NotFoundPage
