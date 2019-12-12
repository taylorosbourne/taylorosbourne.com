import React from 'react';
import styled from 'styled-components';
import Octicon, { Octoface, Rss } from "@primer/octicons-react"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 760px;
  margin: 0 auto;
  @media(max-width: 800px) {
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
          marginBottom: `25px`
        }}
      >
        <a
          href="https://github.com/taylorosbourne"
          target="_blank"
          rel="noopener noreferrer"
          alt="github"
        >
          <Octicon icon={Octoface} size="medium" />
        </a>
        <a
          href="https://taylorosbourne.com/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
          alt="rss"
          style={{ transform:  `scale(1.25) rotate(3deg)` }}
        >
          <Octicon icon={Rss} size="medium" />
        </a>
      </div>
    <p>&#169; Taylor Osbourne 2019</p>
  </StyledFooter>
);

export default Footer;
