import React from 'react';
import styled from 'styled-components';

const InfoList = styled.ul`
  li {
    list-style: none;
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

const SlideOne = () => (
  <div style={{display: `flex`, justifyContent: `center`, alignItems: `center`, height: `100%`, width: `100%`}}>
  <InfoList style={{ maxWidth: `500px` }}>
    <li>
      <SectionHeader style={{ marginBottom: `25px` }}>
        Hi, I'm Taylor
      </SectionHeader>
    </li>
    <li>
      <span role="img" aria-label="age-and-pronouns">
        🚀
      </span>{' '}
      26-years-old. He/Him
    </li>
    <li>
      <span role="img" aria-label="family">
        👨‍👩‍👧
      </span>{' '}
      Husband {'&'} Proud Step-Dad
    </li>
    <li>
      <span role="img" aria-label="job">
        💻
      </span>{' '}
      Full-Stack Dev
    </li>
    <li>
      <span role="img" aria-label="hobby">
        🧰
      </span>{' '}
      Tinkerer
    </li>
    <li>
      <span role="img" aria-label="gamer">
        🎮
      </span>{' '}
      Gamer
    </li>
  </InfoList>
  </div>
);

export default SlideOne;
