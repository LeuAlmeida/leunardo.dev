import React from 'react';
import { Container } from 'components/common';
import CardInterests from 'components/common/CardInterests';
import { Wrapper, SkillsWrapper, InterestSection, Details } from './styles';
import { TitleWrapper, H2, SubTitle } from '../../common/Text';

import About from './About';
import LanguageCounter from '../../common/LanguageCounter';

export const Personal = () => (
  <Wrapper id="myself">
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
        <H2>About Me</H2>
        <SubTitle>Skills</SubTitle>
      </TitleWrapper>

      <InterestSection>
        <Details>
          <h3>Languages</h3>
        </Details>

        <LanguageCounter />
      </InterestSection>
    </SkillsWrapper>
  </Wrapper>
);
