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
    color: rgb(101, 170, 161);
    font-family: sans-serif;
    font-weight: 700;
    position: relative;
    :hover {
        span:not(.fire) {
            opacity: 1;
            margin: 0px 10px;
        }
    }
`;

const LeftBracket = styled.span`
    position: absolute;
    left: -25px;
    top: -2px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    color: #f7df1e;
    font-size: 1.5rem;
`;

const RightBracket = styled.span`
    position: absolute;
    right: -25px;
    top: -2px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    color: #f7df1e;
    font-size: 1.5rem;
`;

const leftBracket = `{`
const rightBracket = `}`


const Nav = () => (
    <StyledNav>
            <StyledLink to="/" className="home-link">
                <LeftBracket>{leftBracket}</LeftBracket>
                console.blog{"("}{" "}<span className="fire" aria-label="fire" role="img">🔥</span>{")"}
                <RightBracket>{rightBracket}</RightBracket>
            </StyledLink>
            <DarkModeToggle />
    </StyledNav>
);

export default Nav;
