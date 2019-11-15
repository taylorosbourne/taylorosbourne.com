import React from 'react';
import { StyledAnchorLink } from '../styles/Link';

const Footer = () => (
  <footer
    style={{
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      maxWidth: 800,
      margin: `0 auto`
    }}
  >
    <p style={{ maxWidth: 500 }}>
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
    <p style={{marginTop: `-15px`}}>&#169; Taylor Osbourne 2019</p>
  </footer>
);

export default Footer;
