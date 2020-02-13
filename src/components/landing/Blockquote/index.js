import React from 'react';

import { Container } from './styles';

export const Blockquote = () => (
  <Container>
    <div className="blockquote-wrapper">
      <div className="blockquote">
        <h5>
          <span style={{ color: '#ffffff' }}> You may never know what</span> results come of your actions
          <span style={{ color: '#ffffff' }}>, but if you do nothing, there will be no </span>results
          <span style={{ color: '#ffffff' }}>.</span>
        </h5>
        <h6>
          <em>Mahatma Gandhi</em>
        </h6>
      </div>
    </div>
  </Container>
);
