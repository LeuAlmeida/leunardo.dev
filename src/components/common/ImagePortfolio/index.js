import React from 'react';

import { Grid } from './styles';

function ImagePortfolio() {
  return (
    <div className="content">
      <Grid>
        <figure className="effect-zoe">
          <img src="https://tympanus.net/Development/HoverEffectIdeas/img/25.jpg" alt="img25" />
          <figcaption>
            <h2>
              Creative <span>Zoe</span>
            </h2>
            <p className="icon-links">
              <a href="#">
                <span className="icon-heart"></span>
              </a>
              <a href="#">
                <span className="icon-eye"></span>
              </a>
              <a href="#">
                <span className="icon-paper-clip"></span>
              </a>
            </p>
            <p className="description">
              Zoe never had the patience of her sisters. She deliberately punched the bear in his face.
            </p>
          </figcaption>
        </figure>
      </Grid>
    </div>
  );
}

export default ImagePortfolio;
