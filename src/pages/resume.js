import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledGatsbyLink } from '../styles/Link';
import { siteMetadata } from '../../gatsby-config';

const Resume = () => (
    <Layout>
    <SEO title={`${siteMetadata.title} - Thanks`} />
    <div style={{
      maxWidth: `1000px`,
      margin: `0 auto`,
      textAlign: `center`
    }}>
      Hello
    </div>
  </Layout>
);

export default Resume;