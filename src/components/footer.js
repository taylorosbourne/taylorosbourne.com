import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
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
`;

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
      <Link href="https://www.gatsbyjs.org/" target="_blank" alt="gatsby-js">
        Gatsby
      </Link>
      .
    </p>
  </footer>
);

export default Footer;
