import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledGatsbyLink } from '../styles/Link';
import { siteMetadata } from '../../gatsby-config';

const UhOh = styled.h1`
  font-size: 150px;
  margin-top: -70px;
  @media(max-width: 800px){
    font-size: 100px;
  }
`;

const Thanks = () => (
  <Layout>
    <SEO title={`${siteMetadata.title} - Thanks`} />
    <div style={{
      maxWidth: `1000px`,
      margin: `100px auto`,
      textAlign: `center`,
    }}>
      <UhOh>Thanks</UhOh>
      <h1 style={{fontSize: `100px`}}>
        <span role="img" aria-label="facepalm">🙌</span>
      </h1>
      <p>I'll get back to you shortly!</p>
      <p>
        back to the 
        <StyledGatsbyLink to="/" id="main">
        {" "}good stuff 
          <span role="img" aria-label="rocket">{" "}🚀</span>
        </StyledGatsbyLink>
      </p>
    </div>
  </Layout>
);

export default Thanks;
