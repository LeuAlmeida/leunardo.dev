import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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

function Studies({ language }) {
  const [lang, setLang] = useState('english');

  useEffect(() => {
    setLang(language || lang);
  }, [lang, language]);

  return (
    <Container>
      <TitleWrapper>
        {lang === 'english' && (
          <>
            <H2>Hello World</H2>
            <SubTitle>Studies</SubTitle>
          </>
        )}
        {lang === 'portuguese' && (
          <>
            <H2>Olá Mundo</H2>
            <SubTitle>Estudos</SubTitle>
          </>
        )}
        {lang === 'german' && (
          <>
            <H2>Hallo Welt</H2>
            <SubTitle>Studien</SubTitle>
          </>
        )}
      </TitleWrapper>
      {lang === 'english' && (
        <>
          <Details>
            <h3>Certificates and Courses</h3>
            <CardsSection>
              {data.english.map(item => (
                <CardStudy
                  key={item.name}
                  name={item.name}
                  image={item.image ? resolve(__dirname, 'svg', item.image) : null}
                  company={item.company}
                  duration={item.duration}
                  color={item.color}
                  description={item.description}
                  certificate={item.certificate ? resolve(__dirname, 'assets', 'certificates', item.certificate) : null}
                />
              ))}
            </CardsSection>
          </Details>
        </>
      )}
      {lang === 'portuguese' && (
        <>
          <Details>
            <h3>Cursos e Certificados</h3>
            <CardsSection>
              {data.portuguese.map(item => (
                <CardStudy
                  key={item.name}
                  name={item.name}
                  image={item.image ? resolve(__dirname, 'svg', item.image) : null}
                  company={item.company}
                  duration={item.duration}
                  color={item.color}
                  description={item.description}
                  certificate={item.certificate ? resolve(__dirname, 'assets', 'certificates', item.certificate) : null}
                />
              ))}
            </CardsSection>
          </Details>
        </>
      )}
      {lang === 'german' && (
        <>
          <Details>
            <h3>Kurse und Zertifikate</h3>
            <CardsSection>
              {data.german.map(item => (
                <CardStudy
                  key={item.name}
                  name={item.name}
                  image={item.image ? resolve(__dirname, 'svg', item.image) : null}
                  company={item.company}
                  duration={item.duration}
                  color={item.color}
                  description={item.description}
                  certificate={item.certificate ? resolve(__dirname, 'assets', 'certificates', item.certificate) : null}
                />
              ))}
            </CardsSection>
          </Details>
        </>
      )}
    </Container>
  );
}
export default connect(state => ({
  language: state.portuguese,
}))(Studies);

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
