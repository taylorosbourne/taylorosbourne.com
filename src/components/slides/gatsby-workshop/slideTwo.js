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
      margin-left: -25px;
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

const SlideTwo = () => (
  <div style={{display: `flex`, justifyContent: `center`, alignItems: `center`}}>
  <InfoList>
    <li style={{listStyle: `none`}}>
      <SectionHeader style={{ marginBottom: `25px` }}>
        Workshop Roadmap
      </SectionHeader>
    </li>
    <li>
      <Emphasized>The What</Emphasized> and <Emphasized>The Why</Emphasized> of Gatsby?
    </li>
    <li>
      <Emphasized>React</Emphasized> & <Emphasized>GraphQL</Emphasized> in Gatsby.
    </li>
    <li>
      <Emphasized>Templates</Emphasized>, <Emphasized>Layouts</Emphasized>, & <Emphasized>Styles</Emphasized> oh my!
    </li>
    <li>
      
    </li>
    <li>
      
    </li>
  </InfoList>
  </div>
);

export default SlideTwo;
