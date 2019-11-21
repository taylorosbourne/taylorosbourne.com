import React from 'react';
import styled from 'styled-components';
import { StyledAnchorLink } from '../styles/Link';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 760px;
  margin: 0 auto;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`; 

const Footer = () => (
  <StyledFooter>
    <p>
      Made with{" "}
      <span aria-label="love" role="img">
        ❤️
      </span>
      ,{" "}
      <span aria-label="coffee" role="img" style={{ fontSize: `1.3rem` }}>
        ☕
      </span>
      , and{" "}
      <StyledAnchorLink href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer" alt="gatsby-js">
        Gatsby
      </StyledAnchorLink>
      .
    </p>
    <p>&#169; Taylor Osbourne 2019</p>
  </StyledFooter>
);

export default Footer;
