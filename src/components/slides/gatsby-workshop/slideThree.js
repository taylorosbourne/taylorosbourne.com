import React from 'react';
import styled from 'styled-components';

const InfoList = styled.ul`
  li {
    line-height: 1;
    font-size: 2rem;
    @media (max-width: 700px) {
      margin-left: -28px;
    }
    a {
      color: #d33682;
    }
  }
`;

const SectionHeader = styled.h2`
  margin-top: 0;
  font-weight: 200;
  color: #b58900;
  border-bottom: 3px #dc322f dashed;
  padding-bottom: 5px;
  font-size: 4rem;
`;

const Emphasized = styled.span`
  font-style: italic;
  border-bottom: 3px #dc322f dashed;
  color: #2aa198;
`;

const SlideThree = () => (
  <div
    style={{
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      height: `100%`,
      width: `100%`,
    }}
  >
    <InfoList>
      <li style={{ listStyle: `none` }}>
        <SectionHeader style={{ marginBottom: `25px` }}>
          What is Gatsby
        </SectionHeader>
      </li>
      <li>
        <Emphasized>Gatsby</Emphasized> is a modern site generator
      </li>
      <li>
        <Emphasized>Free</Emphasized> and <Emphasized>Open Source</Emphasized>
      </li>
      <li>
        Based on <Emphasized>React</Emphasized>
      </li>
      <li>
        Leverages <Emphasized>GraphQL</Emphasized>
      </li>
      <li></li>
      <li>Learn more <a href="https://www.gatsbyjs.org/">here</a></li>
    </InfoList>
  </div>
);

export default SlideThree;
