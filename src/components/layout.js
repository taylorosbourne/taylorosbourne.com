import React from 'react';
import PropTypes from 'prop-types';
import SkipNav from './SkipNav';
import Nav from './Nav';
import Footer from './Footer';
import '../styles/layout.css';

const Layout = ({ children }) => (
  <>
    <SkipNav />
    <Nav />
    <main
      style={{
        margin: `0 auto`,
        maxWidth: 800,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      {children}
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
