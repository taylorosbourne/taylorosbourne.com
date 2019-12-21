import React from 'react';
import { siteMetadata } from '../../gatsby-config';
import Layout from '../components/layout';
import SEO from '../components/seo';
import GeneralInfo from '../components/generalInfo';
import ResumeSheet from '../components/resumeSheet';

const ResumePage = () => {
  const { title } = siteMetadata;
  return (
    <Layout>
      <SEO title={`${title} - Resume`} />
      <br />
      <GeneralInfo />
      <ResumeSheet />
    </Layout>
  );
};

export default ResumePage;
