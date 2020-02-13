import React from 'react';
import { TitleWrapper, H2, SubTitle, Details } from '../../../common/Text';
import { Container, SkillCard } from './styles';

function Studies() {
  return (
    <Container>
      <TitleWrapper>
        <H2>#SendJobs</H2>
        <SubTitle>Past Jobs</SubTitle>
      </TitleWrapper>
      <Details>
        <h3>Professional Experience</h3>

        <SkillCard>
          <header className="skill-card__header">
            <img
              className="skill-card__icon"
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
              alt="HTML5 Logo"
            />
          </header>
          <section className="skill-card__body">
            <h2 className="skill-card__title">html</h2>
            <span className="skill-card__duration">6 ans d'expérience</span>
            <ul className="skill-card__knowledge">
              <li>HTML5</li>
              <li>Sémantique</li>
              <li>SVG</li>
              <li>Canvas</li>
            </ul>
          </section>
        </SkillCard>
      </Details>
    </Container>
  );
}

export default Studies;
