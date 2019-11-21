import React from 'react';
import styled from 'styled-components';
import { StyledAnchorLink } from '../styles/Link';

const ExperienceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  width: 48%;
  background: rgb(245, 245, 245);
  padding: 10px 15px;
  border-radius: 5px;
  transition: transform 0.3s ease;
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media (max-width: 700px) {
    width: 100%;
    margin: 15px auto;
  }
`;

const InfoList = styled.ul`
  li {
    list-style: none;
    line-height: 1;
    a {
      margin-left: -25px;
    }
  }
`;

const ExperienceSection = () => (
    <ExperienceContainer>
        <Card>
          <h2>Projects</h2>
          <InfoList>
            <li>
              <a
                id="main"
                style={{ color: `#000` }}
                href="https://www.autoclaimsassistance.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="aca"
              >
                www.autoclaimsassistance.com
              </a>
            </li>
            <li>
              <a
                style={{ color: `#000` }}
                href="https://www.npmjs.com/package/dad-joke-cli"
                target="_blank"
                rel="noopener noreferrer"
                alt="dadjokecli"
              >
                Dad-joke-cli
              </a>
            </li>
            <li>
              <a
                style={{ color: `#000` }}
                href="https://devdash.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                alt="devdash"
              >
                Devdash
              </a>
            </li>
            <li>
              <StyledAnchorLink
                href="https://github.com/taylorosbourne"
                target="_blank"
                rel="noopener noreferrer"
                alt="github"
              >
                Github
              </StyledAnchorLink>
            </li>
          </InfoList>
        </Card>
        <Card>
          <h2>Experience</h2>
          <InfoList>
            <li style={{ marginLeft: `-25px` }}>
              Manheim || Software Developer
            </li>
            <li style={{ marginLeft: `-25px` }}>
              General Assembly || Assistant Instructor
            </li>
            <li style={{ marginLeft: `-25px` }}>Freelance || Developer</li>
            <li>
              <StyledAnchorLink
                href="https://drive.google.com/file/d/1gerQVwoyvV74G8M7NWdpn_zGW7ARWogS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                alt="resume"
              >
                Resume
              </StyledAnchorLink>
            </li>
          </InfoList>
        </Card>
      </ExperienceContainer>
);

export default ExperienceSection;
