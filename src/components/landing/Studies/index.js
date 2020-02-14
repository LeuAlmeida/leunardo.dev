import React from 'react';
import PropTypes from 'prop-types';
import { resolve } from 'path';
import { TitleWrapper, H2, SubTitle, Details } from '../../common/Text';
import { Container, SkillCard, CardsSection } from './styles';

import { data } from './data';

function CardStudy({ color, image, name, company, duration, description, certificate, dark }) {
  return (
    <>
      <a href={certificate || '#'} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
        <SkillCard>
          <header className={`skill-card__header ${color}`}>
            <img className="skill-card__icon" src={image} alt={name} />
          </header>

          <section className="skill-card__body">
            <h2 className="skill-card__title">{name}</h2>
            {company ? (
              <span className={`skill-card__company ${color}`} style={dark ? { color: '#333' } : { color: '#fff' }}>
                {company}
              </span>
            ) : (
              ''
            )}
            <span className="skill-card__duration">{duration}</span>
            <ul className="skill-card__knowledge">
              <li>{description}</li>
            </ul>
          </section>
        </SkillCard>
      </a>
    </>
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
          {data.map(item => (
            <CardStudy
              name={item.name}
              image={
                item.image
                  ? resolve(__dirname, 'assets', 'svg', item.image)
                  : 'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg'
              }
              company={item.company}
              duration={item.duration}
              color={item.color}
              description={item.description}
              certificate={item.certificate ? resolve(__dirname, 'assets', 'certificates', item.certificate) : null}
            />
          ))}
        </CardsSection>
      </Details>
    </Container>
  );
}

CardStudy.propTypes = {
  color: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
  duration: PropTypes.string,
  description: PropTypes.string,
  certificate: PropTypes.string,
  dark: PropTypes.bool,
};
