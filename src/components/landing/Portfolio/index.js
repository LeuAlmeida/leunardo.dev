import React from 'react';

import { Container, Grid } from './styles';

import ImagePortfolio from '../../common/ImagePortfolio';

import aircnc from '../../../assets/portfolio/aircnc.jpg';

export const Portfolio = () => (
  <Container>
    <Grid>
      <ImagePortfolio name="Air" boldName="CnC" github="https://github.com/LeuAlmeida" image={aircnc} />
      <ImagePortfolio name="Air" boldName="CnC" github="https://github.com/LeuAlmeida" image={aircnc} />
      <ImagePortfolio name="Air" boldName="CnC" github="https://github.com/LeuAlmeida" image={aircnc} />
      <ImagePortfolio name="Air" boldName="CnC" github="https://github.com/LeuAlmeida" image={aircnc} />
      <ImagePortfolio name="Air" boldName="CnC" github="https://github.com/LeuAlmeida" image={aircnc} />
      <ImagePortfolio name="Air" boldName="CnC" github="https://github.com/LeuAlmeida" image={aircnc} />
      <ImagePortfolio name="Air" boldName="CnC" github="https://github.com/LeuAlmeida" image={aircnc} />
    </Grid>
  </Container>
);
