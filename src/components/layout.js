import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SkipNav from './skipNav';
import Nav from './nav';
import Footer from './footer';
import '../styles/layout.css';

const Main = styled.main`
  margin: 0 auto;
  padding: 0px 2.0875rem 1.45rem;
  padding-top: 0;
  border-radius: 5px;
`;

const Layout = ({ children }) => (
  <>
    <SkipNav />
    <Nav />
    <Main style={{maxWidth: 840}}>
      {children}
    </Main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
