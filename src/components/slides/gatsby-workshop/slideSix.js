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

const SlideSix = () => (
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
          GraphQL in Gatsby
        </SectionHeader>
      </li>
      <li>
        <Emphasized>Gatsby</Emphasized> is<Emphasized>'no-schema-neccessary'</Emphasized>
      </li>
      <li>
        <Emphasized>Gatsby</Emphasized> creates schemas <Emphasized>dynamically</Emphasized> by analyzing data
      </li>
      <li>
        In browser <Emphasized>GraphQL</Emphasized> server explorer
      </li>
      <li>
        Pivotal in getting to <Emphasized>1.0</Emphasized>
      </li>
    </InfoList>
  </div>
);;

export default SlideSix;
