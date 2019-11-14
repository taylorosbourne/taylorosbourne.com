import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledGatsbyLink } from '../styles/Link';

const UhOh = styled.h1`
  font-size: 150px;
  margin-top: -70px;
  @media(max-width: 800px){
    font-size: 100px;
  }
`;

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
      <UhOh>UH-OH</UhOh>
      <h1 style={{fontSize: `100px`}}>
        <span role="img" aria-label="facepalm">🤦‍♂️</span>
      </h1>
      <p>You fucked up</p>
      <p>
        back to the 
        <StyledGatsbyLink to="/" id="main">
          good stuff 
          <span role="img" aria-label="rocket">🚀</span>
        </StyledGatsbyLink>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
