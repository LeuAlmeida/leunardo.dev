import '../config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { Layout, SEO } from 'components/common';
import { Skills, Portfolio, Contact, Personal, ProfessionalXp, Studies, Blockquote } from 'components/landing';
import FloatMenu from 'components/floatMenu';
import Intro from '../components/landing/Intro';
import Projects from '../components/landing/Projects';
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
