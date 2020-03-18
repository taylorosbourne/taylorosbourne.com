import React, { FC } from 'react';

import DarkModeToggle from './DarkModeToggle';
import { StyledNav, StyledLink, LeftBracket, RightBracket } from '../styles/Nav';

const leftBracket: string = `{`;
const rightBracket: string = `}`;

const Nav: FC = () => (
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
