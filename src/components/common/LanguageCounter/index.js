import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'semantic-ui-react';
import { Container, CountPs } from './styles';

import 'semantic-ui-css/semantic.min.css';

function LanguageCounter({ language }) {
  const [lang, setLang] = useState('english');

  useEffect(() => {
    setLang(language || lang);
  }, [lang, language]);

  return (
    <>
      <Container inverted style={{ flex: 1, minWidth: 300 }}>
        <Progress percent={100} active inverted success size="large">
          {lang === 'english' && 'Portuguese (Native)'}
          {lang === 'portuguese' && 'Português (Nativo)'}
        </Progress>
        <Progress percent={75} inverted success size="large">
          {lang === 'english' && 'English (Intermediate / Advanced)'}
          {lang === 'portuguese' && 'Inglês (Intermediário / Avançado)'}
        </Progress>
        <Progress percent={15} inverted warning size="large">
          {lang === 'english' && (
            <>
              Germany (Basic) <CountPs>Exchange in July</CountPs>
            </>
          )}
          {lang === 'portuguese' && (
            <>
              Alemão (Básico) <CountPs>Intercambio em Julho</CountPs>
            </>
          )}
        </Progress>
      </Container>
    </>
  );
}

export default connect(state => ({
  language: state.portuguese,
}))(LanguageCounter);
