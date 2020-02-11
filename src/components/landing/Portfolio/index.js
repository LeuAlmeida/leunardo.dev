import React, { useState, useEffect } from 'react';

import { FilterWrapper, FilterItem, Container, Grid, PortfolioWrapper } from './styles';
import ImagePortfolio from '../../common/ImagePortfolio';
import { portfolio } from './portfolio';

export const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    const filtered = portfolio.map(port => ({ ...port, filtered: port.category.includes(filter) }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <FilterWrapper>
        <FilterItem onClick={() => setFilter('all')}>All</FilterItem>
        <FilterItem onClick={() => setFilter('frontend')}>Frontend</FilterItem>
        <FilterItem onClick={() => setFilter('mobile')}>Mobile</FilterItem>
        <FilterItem onClick={() => setFilter('backend')}>Backend</FilterItem>
        <FilterItem onClick={() => setFilter('ux-ui')}>UX/UI</FilterItem>
        <FilterItem onClick={() => setFilter('others')}>Others</FilterItem>
      </FilterWrapper>
      <PortfolioWrapper>
        <Container>
          <Grid>
            {projects.map(item =>
              item.filtered === true ? (
                <ImagePortfolio
                  key={item.name}
                  boldName={item.boldName}
                  name={item.name}
                  behance={item.behance}
                  github={item.github}
                  vide={item.video}
                  url={item.url}
                  image={item.image}
                />
              ) : (
                ''
              )
            )}
          </Grid>
        </Container>
      </PortfolioWrapper>
    </>
  );
};
