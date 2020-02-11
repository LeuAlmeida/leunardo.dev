import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Portfolio, Contact, Projects } from 'components/landing';
import FloatMenu from 'components/floatMenu';

export default () => (
  <Layout>
    <SEO />
    <FloatMenu />
    <Intro />
    <Projects />
    <Skills />
    <Portfolio />
    <Contact />
  </Layout>
);
