import React, { FC, ReactChildren } from 'react';
import styled from 'styled-components';

import SkipNav from './skipNav';
import Nav from './nav';
import Footer from './footer';
import '../styles/layout.css';

const Main = styled.main`
  margin: 0 auto;
  max-width: 840px;
  padding: 0px 2.0875rem 1.45rem;
  padding-top: 0;
  border-radius: 5px;
`;

interface Props {
  children: ReactChildren;
}

const Layout: FC<Props> = ({ children }) => (
  <>
    <SkipNav />
    <Nav />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

export default Layout;
