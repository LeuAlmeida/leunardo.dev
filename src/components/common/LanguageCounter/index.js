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
          {lang === 'german' && 'Portugiesisch (Muttersprache)'}
        </Progress>
        <Progress percent={75} inverted success size="large">
          {lang === 'english' && 'English (Intermediate / Advanced)'}
          {lang === 'portuguese' && 'Inglês (Intermediário / Avançado)'}
          {lang === 'german' && 'Englisch (Mittelstufe / Fortgeschrittene)'}
        </Progress>
        <Progress percent={15} inverted warning size="large">
          {lang === 'english' && (
            <>
              German (Basic) <CountPs>Exchange in July</CountPs>
            </>
          )}
          {lang === 'portuguese' && (
            <>
              Alemão (Básico) <CountPs>Intercambio em Julho</CountPs>
            </>
          )}
          {lang === 'german' && (
            <>
              Deutsch (Basic) <CountPs>Austausch im Juli</CountPs>
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
