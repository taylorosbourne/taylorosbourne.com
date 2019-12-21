import React from 'react';
import styled from 'styled-components';

const Sheet = styled.section`
  width: 100%;
  /* border: 3px dashed #b58900; */
  border: 3px dashed #dc322f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Section = styled.section`
  width: 100%;
  height: 18rem;
  /* border: 1px solid #b58900; */
  display: flex;
  justify-content: space-between;
  div {
    height: 100%;
    width: 48.5%;
    /* border: 1px solid #dc322f; */
    padding: 22px;
    h2 {
      margin-top: 0;
      font-weight: 200;
      color: #b58900;
      border-bottom: 3px #dc322f dashed;
      width: 205px;
      padding-bottom: 5px;
    }
    ul {
      li {
        list-style: none;
        font-weight: 200;
      }
    }
    p {
      font-weight: 200;
    }
    dl {
      font-weight: 200;
      dt {
        margin: 5px 0;
      }
      span {
        display: inline-block;
        margin: 5px 0;
        color: #2aa198;
      }
    }
  }
`;

const ResumeSheet = () => (
  <Sheet>
    <Section>
      <div>
        <h2>Profile</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
      </div>
      <div>
        <h2>Experience</h2>
        <dl>
          <dt>SOFTWARE DEVELOPER - MANHEIM</dt>
          <span>APR 2013 - </span>
          <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
        </dl>
      </div>
    </Section>
    <Section>
      <div>
        <h2>Contact</h2>
        <ul>
          <li>Email:</li>
          <li>Github:</li>
          <li>Linkedin:</li>
        </ul>
      </div>
      <div>
        <dl>
          <dt>INSTRUCTOR ASSOCIATE - GENERAL ASSEMBLY</dt>
          <span>JAN 2019 - MAY 2019</span>
          <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
        </dl>
      </div>
    </Section>
    <Section>
    <div>
        <h2>Skills</h2>
        <div style={{display: `flex`, width: `100%`, justifyContent: `space-between`, alignItems: `flex-start`}}>
          <ul style={{margin: 0, padding: 0, width: `48.5%`}}>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>Graphql</li>
          </ul>
          <ul style={{margin: 0, padding: 0, width: `48.5%`}}>
            <li>Ruby</li>
            <li>MongoDB</li>
            <li>git</li>
          </ul>
        </div>
      </div>
      <div>
        <dl>
          <dt>SOFTWARE DEVELOPER - MANHEIM</dt>
          <span>APR 2013 - </span>
          <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
        </dl>
      </div>
    </Section>
  </Sheet>
);

export default ResumeSheet;
