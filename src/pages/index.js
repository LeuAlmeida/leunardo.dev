import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';
import FloatMenu from 'components/flags';

export default () => (
  <Layout>
    <SEO />
    <FloatMenu />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);
