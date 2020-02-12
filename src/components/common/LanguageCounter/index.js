import React from 'react';
import { Progress } from 'semantic-ui-react';
import { Container, CountPs } from './styles';

import 'semantic-ui-css/semantic.min.css';

function LanguageCounter() {
  return (
    <>
      <Container inverted style={{ flex: 1, minWidth: 300 }}>
        <Progress percent={100} active inverted success size="large">
          Portuguese (Native)
        </Progress>
        <Progress percent={75} inverted success size="large">
          English (Intermediate / Advanced)
        </Progress>
        <Progress percent={15} inverted warning size="large">
          Germany (Basic) <CountPs>Exchange in July</CountPs>
        </Progress>
      </Container>
    </>
  );
}

export default LanguageCounter;
