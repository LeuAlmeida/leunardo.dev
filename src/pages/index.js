import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Layout, SEO } from 'components/common';
import { Contact } from 'components/landing';
import FloatMenu from 'components/floatMenu';
import Intro from '../components/landing/Intro';
import Portfolio from '../components/landing/Portfolio';
import Projects from '../components/landing/Projects';
import Heatmap from '../components/landing/Heatmap';
import Personal from '../components/landing/Personal';
import Skills from '../components/landing/Skills';
import Studies from '../components/landing/Studies';
import ProfessionalXp from '../components/landing/ProfessionalXp';
import Blockquote from '../components/landing/Blockquote';
import Footer from '../components/theme/Footer';
import store from '../store';

import 'react-toastify/dist/ReactToastify.css';

export default () => (
  <Provider store={store}>
    <Layout>
      <ToastContainer autoClose={3000} position="top-left" />
      <SEO />
      <FloatMenu />
      <Intro />
      <Projects />
      <Heatmap />
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
