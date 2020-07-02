import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

function Blockquote({ language }) {
  const [lang, setLang] = useState('english');

  useEffect(() => {
    setLang(language || lang);
  }, [lang, language]);

  return (
    <Container>
      <div className="blockquote-wrapper">
        <div className="blockquote">
          {lang === 'english' && (
            <>
              <h5>
                <span style={{ color: '#ffffff' }}> You may never know what</span> results come of your actions
                <span style={{ color: '#ffffff' }}>, but if you do nothing, there will be no </span>results
                <span style={{ color: '#ffffff' }}>.</span>
              </h5>
            </>
          )}
          {lang === 'portuguese' && (
            <>
              <h5>
                <span style={{ color: '#ffffff' }}> Você nunca sabe quais</span> resultados virão da sua ação
                <span style={{ color: '#ffffff' }}>, mas se você não fizer nada, não haverão </span>resultados
                <span style={{ color: '#ffffff' }}>.</span>
              </h5>
            </>
          )}
          {lang === 'german' && (
            <>
              <h5>
                <span style={{ color: '#ffffff' }}> Sie werden vielleicht nie wissen, welche</span> Ergebnisse von Ihren
                Handlungen kommen,
                <span style={{ color: '#ffffff' }}>, aber wenn Sie nichts tun, wird es keine</span> Ergebnisse geben.
                <span style={{ color: '#ffffff' }}>.</span>
              </h5>
            </>
          )}
          <h6>
            <em>Mahatma Gandhi</em>
          </h6>
        </div>
      </div>
    </Container>
  );
}
export default connect(state => ({
  language: state.portuguese,
}))(Blockquote);
