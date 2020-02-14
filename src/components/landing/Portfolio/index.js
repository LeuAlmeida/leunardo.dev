import React, { useState, useEffect } from 'react';

import { HeaderContainer, FilterWrapper, FilterItem, Container, Grid, PortfolioWrapper, SkillsWrapper } from './styles';
import ImagePortfolio from '../../common/ImagePortfolio';
import { TitleWrapper, H2, SubTitle } from '../../common/Text';
import { portfolio } from './portfolio';

export const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    setTimeout(() => {
      const filtered = portfolio.map(port => ({ ...port, filtered: port.category.includes(filter) }));
      setProjects(filtered);
    }, 0);
  }, [filter]);
  return (
    <>
      <SkillsWrapper as={Container} id="portfolio">
        <HeaderContainer>
          <TitleWrapper style={{ marginLeft: '10%' }}>
            <H2>Portfólio</H2>
            <SubTitle>Recent Jobs</SubTitle>
          </TitleWrapper>
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
        </HeaderContainer>
      </SkillsWrapper>
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
