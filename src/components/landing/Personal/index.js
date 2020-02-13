import React from 'react';
import { Container } from 'components/common';
import CardInterests from 'components/common/CardInterests';
import { Wrapper, SkillsWrapper, InterestSection } from './styles';
import { TitleWrapper, H2, SubTitle, Details } from '../../common/Text';

import About from './About';
import LanguageCounter from '../../common/LanguageCounter';
import Techs from './Techs';

export const Personal = () => (
  <Wrapper>
    <SkillsWrapper as={Container}>
      <About />
    </SkillsWrapper>

    <SkillsWrapper as={Container}>
      <TitleWrapper>
        <H2>About Me</H2>
        <SubTitle>Professional</SubTitle>
      </TitleWrapper>
      <InterestSection>
        <Details>
          <h3>Interests</h3>
        </Details>
        <CardInterests
          name="Freelances"
          subtitle="available."
          submit={() => {
            alert('Freela!');
          }}
        />
        <CardInterests
          name="In loco"
          subtitle="only to Germany."
          cardNumber="card2"
          submit={() => {
            alert('Germany!');
          }}
        />
      </InterestSection>
    </SkillsWrapper>
    <SkillsWrapper as={Container}>
      <TitleWrapper>
        <H2>My i18n</H2>
        <SubTitle>Who I am</SubTitle>
      </TitleWrapper>

      <InterestSection>
        <Details>
          <h3>Languages</h3>
        </Details>

        <LanguageCounter />
      </InterestSection>
    </SkillsWrapper>

    <Techs />
  </Wrapper>
);
