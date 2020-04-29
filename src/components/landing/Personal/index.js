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
          {lang === 'german' && (
            <>
              <H2>Über Mich</H2>
              <SubTitle>Fachmann</SubTitle>
            </>
          )}
        </TitleWrapper>
        <InterestSection>
          <Details>
            {lang === 'english' && <h3>Interests</h3>}
            {lang === 'portuguese' && <h3>Interesses</h3>}
            {lang === 'german' && <h3>Interessen</h3>}
          </Details>
          <CardInterests
            name={
              (lang === 'english' && 'Freelancer') ||
              (lang === 'portuguese' && 'Freelances') ||
              (lang === 'german' && 'Freiberufler')
            }
            subtitle={
              (lang === 'english' && 'available.') ||
              (lang === 'portuguese' && 'disponível.') ||
              (lang === 'german' && 'verfügbar.')
            }
          />
          <CardInterests
            name={
              (lang === 'english' && 'In loco') ||
              (lang === 'portuguese' && 'Alocado') ||
              (lang === 'german' && 'In der Lok')
            }
            subtitle={
              (lang === 'english' && 'only to Germany.') ||
              (lang === 'portuguese' && 'apenas Alemanha.') ||
              (lang === 'german' && 'nur nach Deutschland.')
            }
            cardNumber="card2"
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
          {lang === 'german' && (
            <>
              <H2>Meineu i18n</H2>
              <SubTitle>Wer bin Ich</SubTitle>
            </>
          )}
        </TitleWrapper>

        <InterestSection>
          <Details>
            {lang === 'english' && <h3>Languages</h3>}
            {lang === 'portuguese' && <h3>Idiomas</h3>}
            {lang === 'german' && <h3>Sprachen</h3>}
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
          {lang === 'german' && (
            <>
              <H2>#Technologien</H2>
              <SubTitle>Über mich</SubTitle>
            </>
          )}
        </TitleWrapper>

        <InterestSection>
          <Details>
            {lang === 'english' && <h3>Technical Skills</h3>}
            {lang === 'portuguese' && <h3>Habilidades Técnicas</h3>}
            {lang === 'german' && <h3>Technische Fähigkeiten</h3>}
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
