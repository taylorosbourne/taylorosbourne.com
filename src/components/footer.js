import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 760px;
  margin: 0 auto;
  margin-top: 15px;
  font-weight: 200;
  @media (max-width: 800px) {
    max-width: 90%;
  }
`;

const Footer = () => (
  <StyledFooter>
    <div
      style={{
        width: `70px`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        marginBottom: `25px`,
      }}
    >
      <a
        href="https://github.com/taylorosbourne"
        target="_blank"
        rel="noopener noreferrer"
        alt="github"
        style={{ 
          color: `#b58900`, 
          marginRight: `15px`,
          textDecoration: `none`,
          borderBottom: `3px #dc322f dashed`,
        }}
      >
        Github
      </a>
      <a
        href="https://taylorosbourne.com/rss.xml"
        target="_blank"
        rel="noopener noreferrer"
        alt="rss"
        style={{
          marginRight: `15px`,
          textDecoration: `none`,
          borderBottom: `3px #dc322f dashed`,
          color: `#b58900`,
        }}
      >
        RSS
      </a>
      <a
        href="https://www.linkedin.com/in/taylor-osbourne/"
        target="_blank"
        rel="noopener noreferrer"
        alt="rss"
        style={{
          textDecoration: `none`,
          borderBottom: `3px #dc322f dashed`,
          color: `#b58900`,
        }}
      >
        Linkedin
      </a>
    </div>
    <p>&#169; Taylor Osbourne 2019</p>
  </StyledFooter>
);

export default Footer;
