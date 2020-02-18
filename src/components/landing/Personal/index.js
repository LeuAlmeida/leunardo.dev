import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Container } from 'components/common';
import CardInterests from 'components/common/CardInterests';
import { Wrapper, SkillsWrapper, InterestSection } from './styles';
import { TitleWrapper, H2, SubTitle, Details } from '../../common/Text';

import About from './About';
import LanguageCounter from '../../common/LanguageCounter';
import Techs from './Techs';

function Personal({ language }) {
  const [lang, setLang] = useState('english');

  useEffect(() => {
    setLang(language || lang);
  }, [lang, language]);

  return (
    <Wrapper>
      <SkillsWrapper as={Container}>
        <About />
      </SkillsWrapper>

      <SkillsWrapper as={Container}>
        <TitleWrapper>
          {lang === 'english' && (
            <>
              <H2>About Me</H2>
              <SubTitle>Professional</SubTitle>
            </>
          )}
          {lang === 'portuguese' && (
            <>
              <H2>Sobre Mim</H2>
              <SubTitle>Profissional</SubTitle>
            </>
          )}
        </TitleWrapper>
        <InterestSection>
          <Details>
            {lang === 'english' && <h3>Interests</h3>}
            {lang === 'portuguese' && <h3>Interesses</h3>}
          </Details>
          <CardInterests
            name="Freelances"
            subtitle={(lang === 'english' && 'available.') || (lang === 'portuguese' && 'disponível')}
            submit={() => {
              alert('Freela!');
            }}
          />
          <CardInterests
            name={(lang === 'english' && 'In loco') || (lang === 'portuguese' && 'Alocado')}
            subtitle={(lang === 'english' && 'only to Germany.') || (lang === 'portuguese' && 'apenas Alemanha.')}
            cardNumber="card2"
            submit={() => {
              alert('Germany!');
            }}
          />
        </InterestSection>
      </SkillsWrapper>
      <SkillsWrapper as={Container}>
        <TitleWrapper>
          {lang === 'english' && (
            <>
              <H2>My i18n</H2>
              <SubTitle>Who I am</SubTitle>
            </>
          )}
          {lang === 'portuguese' && (
            <>
              <H2>Meu i18n</H2>
              <SubTitle>Quem sou eu</SubTitle>
            </>
          )}
        </TitleWrapper>

        <InterestSection>
          <Details>
            <h3>Languages</h3>
          </Details>

          <LanguageCounter />
        </InterestSection>
      </SkillsWrapper>

      <SkillsWrapper as={Container} style={{ paddingTop: '4rem', paddingBottom: 0 }}>
        <TitleWrapper>
          {lang === 'english' && (
            <>
              <H2>#Techs</H2>
              <SubTitle>About Me</SubTitle>
            </>
          )}
          {lang === 'portuguese' && (
            <>
              <H2>#Tecnologias</H2>
              <SubTitle>Sobre Mim</SubTitle>
            </>
          )}
        </TitleWrapper>

        <InterestSection>
          <Details>
            {lang === 'english' && <h3>Technical Skills</h3>}
            {lang === 'portuguese' && <h3>Habilidades Técnicas</h3>}
          </Details>
        </InterestSection>
      </SkillsWrapper>

      <SkillsWrapper as={Container} style={{ paddingBottom: '4rem' }}>
        <Techs />
      </SkillsWrapper>
    </Wrapper>
  );
}

export default connect(state => ({
  language: state.portuguese,
}))(Personal);
