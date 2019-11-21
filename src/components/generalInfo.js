import React from "react"
import styled from "styled-components"

const InfoContainer = styled.div`
  margin: 55px auto 35px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Spiel = styled.div`
  max-width: 50%;
  @media (max-width: 700px) {
    max-width: 90%;
    margin: 0 auto;
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

const GeneralInfo = () => (
  <InfoContainer>
    <Spiel>
      <h1 style={{ marginTop: 0 }}>Hi, I'm Taylor</h1>
      <p style={{ lineHeight: `1.5`, fontSize: `20px` }}>
        I'm a full-stack JavaScript Dev with a soft-spot for Ruby. I like to
        write about being a developer today.
      </p>
    </Spiel>
    <InfoList>
      <li>
        <span role="img" aria-label="ageAndPronouns">
          🚀
        </span>{" "}
        26-years-old. He/Him
      </li>
      <li>
        <span role="img" aria-label="family">
          👨‍👩‍👧
        </span>{" "}
        Husband {"&"} Proud Step-Dad
      </li>
      <li>
        <span role="img" aria-label="job">
          💻
        </span>{" "}
        Full-Stack Dev
      </li>
      <li>
        <span role="img" aria-label="hobby">
          🧰
        </span>{" "}
        Tinkerer
      </li>
      <li>
        <span role="img" aria-label="gamer">
          🎮
        </span>{" "}
        Gamer
      </li>
    </InfoList>
  </InfoContainer>
)

export default GeneralInfo
