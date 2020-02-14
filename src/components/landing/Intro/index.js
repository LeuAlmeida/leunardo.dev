import React, { useState, useRef, useEffect } from 'react';
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
          <h6>Stalk me in</h6>
          <SocialIcons>
            <ButtonIcon href="https://github.com/LeuAlmeida">
              <FaGithub color="#FFF" size={18} />
            </ButtonIcon>
            <ButtonIcon href="https://www.behance.net/almeida99">
              <FaBehance color="#FFF" size={18} />
            </ButtonIcon>
            <ButtonIcon href="https://www.linkedin.com/in/leonardoalmeida99/">
              <FaLinkedin color="#FFF" size={18} />
            </ButtonIcon>
            <ButtonIcon href="https://www.instagram.com/1bigo/">
              <FaInstagram color="#FFF" size={18} />
            </ButtonIcon>
            <ButtonIcon href="https://www.facebook.com/leuzinhopataty">
              <FaFacebookF color="#FFF" size={18} />
            </ButtonIcon>
            <ButtonIcon href="https://leunardo.dev/cv">
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
