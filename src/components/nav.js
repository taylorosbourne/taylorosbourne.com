import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import { StyledNav, StyledLink, LeftBracket, RightBracket } from '../styles/Nav';

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
