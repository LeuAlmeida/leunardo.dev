import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { HeaderContainer, FilterWrapper, FilterItem, Container, Grid, PortfolioWrapper, SkillsWrapper } from './styles';
import ImagePortfolio from '../../common/ImagePortfolio';
import { TitleWrapper, H2, SubTitle } from '../../common/Text';
import { portfolio } from './portfolio';

function Portfolio({ language }) {
  const [lang, setLang] = useState('english');

  useEffect(() => {
    setLang(language || lang);
  }, [lang, language]);

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
            {lang === 'english' && (
              <>
                <H2>Portfolio</H2>
                <SubTitle>Recent Jobs</SubTitle>
              </>
            )}
            {lang === 'portuguese' && (
              <>
                <H2>Portfólio</H2>
                <SubTitle>Trabalhos Recentes</SubTitle>
              </>
            )}
            {lang === 'german' && (
              <>
                <H2>Portfolio</H2>
                <SubTitle>Letzte Jobs</SubTitle>
              </>
            )}
          </TitleWrapper>
          <FilterWrapper>
            {lang === 'english' && (
              <FilterItem active={filter === 'all'} onClick={() => setFilter('all')}>
                All
              </FilterItem>
            )}
            {lang === 'portuguese' && (
              <FilterItem active={filter === 'all'} onClick={() => setFilter('all')}>
                Todos
              </FilterItem>
            )}
            {lang === 'german' && (
              <FilterItem active={filter === 'all'} onClick={() => setFilter('all')}>
                Alle
              </FilterItem>
            )}
            <FilterItem active={filter === 'frontend'} onClick={() => setFilter('frontend')}>
              Frontend
            </FilterItem>
            <FilterItem active={filter === 'mobile'} onClick={() => setFilter('mobile')}>
              {((lang === 'portuguese' || lang === 'english') && 'Mobile') || (lang === 'german' && 'Mobilgerät')}
            </FilterItem>
            <FilterItem active={filter === 'backend'} onClick={() => setFilter('backend')}>
              Backend
            </FilterItem>
            <FilterItem active={filter === 'ux-ui'} onClick={() => setFilter('ux-ui')}>
              UX/UI
            </FilterItem>
            {lang === 'english' && (
              <FilterItem active={filter === 'others'} onClick={() => setFilter('others')}>
                Others
              </FilterItem>
            )}
            {lang === 'german' && (
              <FilterItem active={filter === 'others'} onClick={() => setFilter('others')}>
                Andere
              </FilterItem>
            )}
            {lang === 'portuguese' && (
              <FilterItem active={filter === 'others'} onClick={() => setFilter('others')}>
                Outros
              </FilterItem>
            )}
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
}

export default connect(state => ({
  language: state.portuguese,
}))(Portfolio);
