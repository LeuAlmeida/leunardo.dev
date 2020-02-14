import React, { useState, useRef, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, ButtonIcon } from 'components/common';
import { Details } from 'components/common/Text';
import dev from 'assets/illustrations/dev.svg';
import { FaGithub, FaBehance, FaLinkedin, FaInstagram, FaFacebookF, FaFilePdf } from 'react-icons/fa';
import useTypewriter from 'react-typewriter-hook';
import { Wrapper, IntroWrapper, Thumbnail, SocialIcons } from './styles';

const MagicOcean = ['Backend Developer', 'UX & UI Designer'];
let index = 0;

export function Intro() {
  const [magicName, setMagicName] = useState('Frontend Developer');
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > 2 ? 0 : +index;
      setMagicName(MagicOcean[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);

  return (
    <Wrapper id="about">
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <h1>Hello, I'm Léu Almeida</h1>
          <h4>I am {name}</h4>
          <h6>Stalk me:</h6>
          <SocialIcons>
            <ButtonIcon as={AnchorLink} href="#contact">
              <FaGithub color="#FFF" size={18} />
            </ButtonIcon>
            <ButtonIcon as={AnchorLink} href="#contact">
              <FaBehance color="#FFF" size={18} />
            </ButtonIcon>
            <ButtonIcon as={AnchorLink} href="#contact">
              <FaLinkedin color="#FFF" size={18} />
            </ButtonIcon>
            <ButtonIcon as={AnchorLink} href="#contact">
              <FaInstagram color="#FFF" size={18} />
            </ButtonIcon>
            <ButtonIcon as={AnchorLink} href="#contact">
              <FaFacebookF color="#FFF" size={18} />
            </ButtonIcon>
            <ButtonIcon as={AnchorLink} href="#contact">
              <FaFilePdf color="#FFF" size={18} />
            </ButtonIcon>
          </SocialIcons>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Hello! My name is Leonardo Almeida, but you can call me Léu :)" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
}
