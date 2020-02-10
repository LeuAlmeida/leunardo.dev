import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, ButtonIcon } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { FaGithub, FaBehance } from 'react-icons/fa';
import { Wrapper, IntroWrapper, Details, Thumbnail, SocialIcons } from './styles';

export const Intro = () => (
  <Wrapper id="about">
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Léu Almeida</h1>
        <h4>Front-End Developer, UX & UI Designer</h4>
        <SocialIcons>
          <ButtonIcon as={AnchorLink} href="#contact">
            <FaGithub color="#FFF" size={18} />
          </ButtonIcon>
          <ButtonIcon as={AnchorLink} href="#contact">
            <FaBehance color="#FFF" size={18} />
          </ButtonIcon>
        </SocialIcons>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
