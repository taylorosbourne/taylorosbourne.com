import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledGatsbyLink = styled(Link)`
  text-decoration: none;
  color: #b58900;
  font-weight: 300;
  :hover {
    border-bottom: 3px #dc322f dashed;
  }
`;

const StyledAnchorLink = styled.a`
  text-decoration: none;
  color: #d33682;
  font-weight: bold;
  font-family: Arial;
  :hover {
    border-bottom: 3px #dc322f dashed;
  }
`;

const Tag = styled(Link)`
  color: #2aa198;
  background: transparent;
  margin: 5px 20px;
  text-decoration: none;
  font-family: Arial;
  :hover {
    border-bottom: 3px #dc322f dashed;
  }
`;

export { StyledGatsbyLink, StyledAnchorLink, Tag };
