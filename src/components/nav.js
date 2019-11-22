import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import rss from '../images/rss.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

const StyledNav = styled.nav`
    padding: 5px 1.0875rem 1.45rem;
    max-width: 800px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    @media(max-width: 850px) {
        max-width: 90%;
    }
`;

const NavIconAnchor = styled.a`
    height: 30px; 
    width: 30px;
    padding: 5px; 
    background: rgb(242,242,242);
    border-radius: 5px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #173449;
    font-family: sans-serif;
    font-weight: 700;
    :hover {
        span {
            opacity: 1;
            margin: 0px 5px;
        }
    }
`

const Bracket = styled.span`
    opacity: 0;
    transition: all 0.2s ease-in-out;
    color: #f7df1e;
    font-size: 1.5rem;
`

const leftBracket = `{`
const rightBracket = `}`


const Nav = () => (
    <StyledNav>
            <StyledLink to="/">
                <Bracket>{leftBracket}</Bracket>Taylor Osbourne<Bracket>{rightBracket}</Bracket>
            </StyledLink>
        <div
            style={{
                display: `flex`,
                justifyContent: `space-around`,
                alignItems: `center`,
                width: `100px`
            }}>
            <NavIconAnchor
                href="https://github.com/taylorosbourne"
                target="_blank"
                rel="noopener noreferrer"
                alt="github"
                >
                <img src={github} alt="github" />
            </NavIconAnchor>
            <NavIconAnchor
                href="https://www.linkedin.com/in/taylor-osbourne/"
                target="_blank"
                rel="noopener noreferrer"
                alt="linkedin"
                >
                <img src={linkedin} alt="linkedin" />
            </NavIconAnchor>
            <NavIconAnchor
                href="https://taylorosbourne.com/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                alt="rss">
                <img src={rss} alt="rss-feed" />
            </NavIconAnchor>
        </div>
    </StyledNav>
);

export default Nav;
