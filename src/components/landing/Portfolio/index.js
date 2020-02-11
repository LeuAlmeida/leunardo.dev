import React from 'react';

import { Container, Grid, PortfolioWrapper } from './styles';
import ImagePortfolio from '../../common/ImagePortfolio';
import * as images from './images';

export const Portfolio = () => (
  <PortfolioWrapper>
    <Container>
      <Grid>
        <ImagePortfolio
          boldName="BTM"
          name="Performance"
          github="https://github.com/LeuAlmeida"
          image={images.aircnc}
        />
      </Grid>
    </Container>
  </PortfolioWrapper>
);
