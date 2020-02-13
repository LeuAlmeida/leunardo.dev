import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Portfolio, Contact, Projects, Personal, ProfessionalXp, Blockquote } from 'components/landing';
import FloatMenu from 'components/floatMenu';

export default () => (
  <Layout>
    <SEO />
    <FloatMenu />
    <Intro />
    <Projects />
    <Portfolio />
    <Skills />
    <Personal />
    <ProfessionalXp />
    <Blockquote />
    <Contact />
  </Layout>
);
