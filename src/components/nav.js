import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';

const StyledNav = styled.nav`
  padding: 5px 1.0875rem 1.45rem;
  max-width: 800px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2aa198;
  font-family: sans-serif;
  font-weight: 200;
  position: relative;
  transition: 0.3s ease;
  font-size: 1.35rem;
  :hover {
    transform: rotate(-5deg);
    font-size: 2rem;
    animation: 0.4s infinite linear wiggle;
    @media(max-width: 1000px) {
      animation: none;
      font-size: 1.35rem;
      transform: rotate(0deg);
    }
    span:not(.fire) {
      opacity: 1;
      margin: 0px 5px;
    }
  }
  @keyframes wiggle {
    0% {transform: rotate(-2deg)}
    50% {transform: rotate(-7deg)}
    100% {transform: rotate(-2deg)}
  }
`;

const LeftBracket = styled.span`
  position: absolute;
  left: -25px;
  top: -2px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  color: #b58900;
  font-size: 2.5rem;
  font-weight: 700;
`;

const RightBracket = styled.span`
  position: absolute;
  right: -25px;
  top: -2px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  color: #b58900;
  font-size: 2.5rem;
  font-weight: 700;
`;

const leftBracket = `{`;
const rightBracket = `}`;

const Nav = () => (
  <StyledNav>
    <StyledLink to="/" className="home-link">
      <LeftBracket>{leftBracket}</LeftBracket>
      console.blog{'('}
      <span className="fire" aria-label="fire" role="img">
        🔥
      </span>
      {')'}
      <RightBracket>{rightBracket}</RightBracket>
    </StyledLink>
    <DarkModeToggle />
  </StyledNav>
);

export default Nav;
