import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledGatsbyLink = styled(Link)`
  text-decoration: none;
  color: #b58900;
  font-weight: 300;
`;

const StyledAnchorLink = styled.a`
  text-decoration: none;
  color: #d33682;
  font-weight: bold;
  font-family: Arial;
  position: relative;
  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #d33682;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  :hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

const Tag = styled(Link)`
  color: #2aa198;
  background: transparent;
  border: 1px solid #2aa198;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-family: Arial;
  transition: all 0.1s ease-in-out;
  :hover {
    background: #2aa198;
    color: rgb(242, 242, 242);
  }
`;

export { StyledGatsbyLink, StyledAnchorLink, Tag };
