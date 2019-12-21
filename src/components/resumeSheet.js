import React from 'react';
import styled from 'styled-components';
import Experience from './experienceSection';
import Projects from './projectSection';
import Contact from './contactSection';
import Skills from './skillSection';

const Sheet = styled.section`
  width: 100%;
  border: 3px dashed #dc322f;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Section = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 100%;
  }
  div {
    height: 100%;
    width: 100%;
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
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        font-weight: 200;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    p {
      font-weight: 200;
    }
    dl {
      font-weight: 200;
      dt {
        margin: 5px 0;
        color: #6c71c4;
        font-weight: 300;
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
      <Projects />
      <Contact />
      <Skills />
    </Section>
    <Section>
      <Experience />
    </Section>
  </Sheet>
);

export default ResumeSheet;
