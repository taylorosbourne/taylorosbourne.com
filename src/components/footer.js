import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 760px;
  margin: 0 auto;
  margin-top: 45px;
  font-weight: 200;
  @media (max-width: 800px) {
    max-width: 90%;
  }
`;

const FooterLink = styled.a`
  color: #b58900;
  margin-right: 15px;
  text-decoration: none;
  border-bottom: 3px #dc322f dashed;
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
      <FooterLink
        href="https://github.com/taylorosbourne"
        target="_blank"
        rel="noopener noreferrer"
        alt="github"
      >
        Github
      </FooterLink>
      <FooterLink
        href="https://taylorosbourne.com/rss.xml"
        target="_blank"
        rel="noopener noreferrer"
        alt="rss"
      >
        RSS
      </FooterLink>
      <FooterLink
        href="https://www.linkedin.com/in/taylor-osbourne/"
        target="_blank"
        rel="noopener noreferrer"
        alt="rss"
      >
        Linkedin
      </FooterLink>
    </div>
  </StyledFooter>
);

export default Footer;
