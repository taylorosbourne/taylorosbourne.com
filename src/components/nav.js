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

const Nav = () => (
    <StyledNav>
        <h5>
            <Link style={{ textDecoration: `none`, color: `#173449` }} to="/">
                Taylor Osbourne
            </Link>
        </h5>
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
            <Link to="/rss.xml" style={{height: `30px`, width: `30px`, padding: `5px`, background: `rgb(242,242,242)`, borderRadius: `5px`}}>
                <img src={rss} alt="rss-feed" />
            </Link>
        </div>
    </StyledNav>
);

export default Nav;
