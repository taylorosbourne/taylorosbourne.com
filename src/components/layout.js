import React from 'react';
import PropTypes from 'prop-types';
import SkipNav from './skipNav';
import Nav from './nav';
import Footer from './footer';
import '../styles/layout.css';

const Layout = ({ children }) => (
  <>
    <SkipNav />
    <Nav />
    <main
      style={{
        margin: `0 auto`,
        maxWidth: 840,
        padding: `0px 2.0875rem 1.45rem`,
        paddingTop: 0,
        borderRadius: `5px`,
        // backgroundImage: `linear-gradient(to bottom, #073642, #05333f, #03303c, #012e39, #002b36)`
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
