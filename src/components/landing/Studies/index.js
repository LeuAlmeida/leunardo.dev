import React from 'react';
import { TitleWrapper, H2, SubTitle, Details } from '../../common/Text';
import { Container, SkillCard, CardsSection } from './styles';
import Tag from '../Personal/Techs/Tag';

function CardStudy({ color, image, name, duration, description, certificate }) {
  return (
    <SkillCard>
      <header className={`skill-card__header ${color}`}>
        <img className="skill-card__icon" src={image} alt={name} />
      </header>

      <section className="skill-card__body">
        <h2 className="skill-card__title">{name}</h2>
        <span className="skill-card__duration">{duration}</span>
        <ul className="skill-card__knowledge">
          <li>{description}</li>
          {certificate ? <Tag color="blue" url={certificate} name="Certificate" icon="certificate" /> : ''}
        </ul>
      </section>
    </SkillCard>
  );
}

export function Studies() {
  return (
    <Container>
      <TitleWrapper>
        <H2>Hello World</H2>
        <SubTitle>Studies</SubTitle>
      </TitleWrapper>
      <Details>
        <h3>Certificates and Courses</h3>
        <CardsSection>
          <CardStudy
            image="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            duration="6 ans d'expérience"
            color="orange"
            name="HTML5"
            description="ok"
            certificate="https://google.com.br"
          />
        </CardsSection>
      </Details>
    </Container>
  );
}
