import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StyledGatsbyLink } from '../styles/Link';

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <StyledGatsbyLink
          to="/"
        >
          {siteTitle}
        </StyledGatsbyLink>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
