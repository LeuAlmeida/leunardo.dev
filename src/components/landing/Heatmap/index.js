import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from 'components/common';
import { Wrapper, Grid } from './styles';

const Heatmap = ({ language }) => {
  const [lang, setLang] = useState('english');

  useEffect(() => {
    setLang(language || lang);
  }, [lang, language]);

  return (
    <Wrapper as={Container} id="pinned">
      {lang === 'english' && <h2>Github Code Frequency</h2>}
      {lang === 'portuguese' && <h2>Frequência no Github</h2>}
      {lang === 'german' && <h2>Github-Code-Frequenz</h2>}
      <Grid>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/LeuAlmeida">
          <img
            alt="Github Frequency"
            src="https://grass-graph.moshimo.works/images/LeuAlmeida.png?width=870&height=155&background=none"
          />
        </a>
      </Grid>
    </Wrapper>
  );
};

Heatmap.propTypes = {
  language: PropTypes.string.isRequired,
};

export default connect(state => ({
  language: state.portuguese,
}))(Heatmap);
