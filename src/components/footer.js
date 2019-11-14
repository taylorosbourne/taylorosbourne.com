import React from 'react';
import { StyledAnchorLink } from '../styles/Link';

const Footer = () => (
  <footer
    style={{
      display: `flex`,
      justifyContent: `center`,
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
  </footer>
);

export default Footer;
