import React from 'react';
import styled from 'styled-components';

const SkipNavCon = styled.div`
  width: 240px;
  margin: 15px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkipNavButton = styled.a`
  padding: 10px 20px;
  border-radius: 5px;
  background-image: linear-gradient(to right, #2aa198, #009cb7, #0092d2, #4b81da, #9b65c6, #c152aa, #d74386, #df405f, #de5146, #d6642e, #c87816, #b58900);
  color: rgb(242, 242, 242);
  font-weight: bold;
  font-family: Arial;
  border: 0;
  opacity: 0;
  text-decoration: none;
  :focus {
    opacity: 1;
  }
`;

const SkipNav = () => (
  <SkipNavCon>
    <SkipNavButton href="#main" alt="skip-nav">
      Skip Navigation
    </SkipNavButton>
  </SkipNavCon>
);

export default SkipNav;
