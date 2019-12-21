import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const InfoContainer = styled.div`
  margin: 55px auto 35px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: 200;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Spiel = styled.div`
  max-width: 50%;
  @media (max-width: 700px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const InfoList = styled.ul`
  li {
    list-style: none;
    line-height: 1;
    @media (max-width: 700px) {
      margin-left: -28px;
    }
    a {
      margin-left: -25px;
    }
  }
`;

const GeneralInfo = ({ resume }) => (
  <InfoContainer>
    <Spiel>
      <h2
        style={{
          marginTop: 0,
          fontWeight: `200`,
          color: `#b58900`,
          borderBottom: `3px #dc322f dashed`,
          width: `205px`,
          paddingBottom: `5px`,
        }}
      >
        Hi, I'm Taylor
      </h2>
      <p style={{ lineHeight: `1.5`, fontSize: `20px` }}>
        I'm a full-stack JavaScript Dev with a soft-spot for Ruby. I like to
        write about being a developer today.
      </p>
      {!resume ? (
        <Link
          to="/resume"
          style={{
            display: `inline-block`,
            marginRight: `15px`,
            textDecoration: `none`,
            borderBottom: `3px #dc322f dashed`,
            color: `#b58900`,
          }}
        >
          Resume
        </Link>
      ) : (
        <Link
          to="/"
          style={{
            display: `inline-block`,
            marginRight: `15px`,
            textDecoration: `none`,
            borderBottom: `3px #dc322f dashed`,
            color: `#b58900`,
          }}
        >
          Blog
        </Link>
      )}
    </Spiel>
    <InfoList>
      <li>
        <h2
          style={{
            marginTop: 0,
            fontWeight: `200`,
            color: `#b58900`,
            borderBottom: `3px #dc322f dashed`,
            width: `205px`,
            paddingBottom: `5px`,
            marginBottom: `25px`,
          }}
        >
          in a nut-shell...
        </h2>
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
  </InfoContainer>
);

export default GeneralInfo;
