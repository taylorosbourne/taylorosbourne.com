import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledLink from '../components/link'

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
