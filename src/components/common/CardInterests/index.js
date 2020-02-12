import React from 'react';

import { CardContainer } from './styles';

function CardInterests({ name, subtitle, submit, cardNumber }) {
  return (
    <>
      <CardContainer>
        <div className={`card ${cardNumber}`}>
          <h2>{name}</h2>
          <i className="fas fa-arrow-right"></i>
          <p>{subtitle}</p>
          <div className="pic"></div>
          <div className="social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-github"></i>
          </div>
          <button type="submit" onClick={submit}></button>
        </div>
      </CardContainer>
    </>
  );
}

export default CardInterests;
