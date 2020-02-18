import '../config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { Layout, SEO } from 'components/common';
import { Contact, Blockquote } from 'components/landing';
import FloatMenu from 'components/floatMenu';
import Intro from '../components/landing/Intro';
import Portfolio from '../components/landing/Portfolio';
import Projects from '../components/landing/Projects';
import Personal from '../components/landing/Personal';
import Skills from '../components/landing/Skills';
import Studies from '../components/landing/Studies';
import ProfessionalXp from '../components/landing/ProfessionalXp';
import Footer from '../components/theme/Footer';
import store from '../store';

export default () => (
  <Provider store={store}>
    <Layout>
      <SEO />
      <FloatMenu />
      <Intro />
      <Projects />
      <Portfolio />
      <Skills />
      <Personal />
      <ProfessionalXp />
      <Studies />
      <Blockquote />
      <Contact />
      <Footer />
    </Layout>
  </Provider>
);
