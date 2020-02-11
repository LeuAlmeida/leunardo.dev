import React from 'react';

import { Container, Grid } from './styles';

import ImagePortfolio from '../../common/ImagePortfolio';

export const Portfolio = () => (
  <Container>
    <Grid>
      <ImagePortfolio />
      <ImagePortfolio />
      <ImagePortfolio />
    </Grid>
  </Container>
);
