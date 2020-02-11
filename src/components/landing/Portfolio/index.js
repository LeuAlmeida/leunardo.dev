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
          behance="https://www.behance.net/gallery/78028243/Projeto-de-Website-BTM-Performance"
          url="https://btmperformance.com.br/"
          image={images.btm}
        />
        <ImagePortfolio
          boldName="APP"
          name="October"
          behance="https://www.behance.net/gallery/87664595/React-Native-open-source-App-October"
          github="https://github.com/LeuAlmeida/app.october"
          image={images.appoctober}
        />
        <ImagePortfolio
          boldName="T3"
          name="Driver"
          behance="https://www.behance.net/gallery/73684575/Criacao-de-Website-T3-Driver"
          url="https://t3driver.com.br/"
          image={images.t3Driver}
        />
        <ImagePortfolio
          boldName="E-mail"
          name="Marketing"
          github="https://github.com/LeuAlmeida/E-mail-Marketing-Portfolio"
          behance="https://github.com/LeuAlmeida/E-mail-Marketing-Portfolio"
          image={images.emkt}
        />
      </Grid>
    </Container>
  </PortfolioWrapper>
);
