import React, { useState, useEffect } from 'react';

import { FilterWrapper, FilterItem, Container, Grid, PortfolioWrapper } from './styles';
import ImagePortfolio from '../../common/ImagePortfolio';
import { portfolio } from './portfolio';

export const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  // const [active, setActive] = useState('');

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
        <FilterItem active={filter === 'all'} onClick={() => setFilter('all')}>
          All
        </FilterItem>
        <FilterItem active={filter === 'frontend'} onClick={() => setFilter('frontend')}>
          Frontend
        </FilterItem>
        <FilterItem active={filter === 'mobile'} onClick={() => setFilter('mobile')}>
          Mobile
        </FilterItem>
        <FilterItem active={filter === 'backend'} onClick={() => setFilter('backend')}>
          Backend
        </FilterItem>
        <FilterItem active={filter === 'ux-ui'} onClick={() => setFilter('ux-ui')}>
          UX/UI
        </FilterItem>
        <FilterItem active={filter === 'others'} onClick={() => setFilter('others')}>
          Others
        </FilterItem>
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
