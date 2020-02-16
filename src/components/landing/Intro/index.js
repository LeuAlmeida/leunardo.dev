import React, { useState, useRef, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { FaGithub, FaBehance, FaLinkedin, FaInstagram, FaFacebookF, FaFilePdf } from 'react-icons/fa';
import useTypewriter from 'react-typewriter-hook';

import { Header } from 'components/theme';
import { Container, ButtonIcon } from 'components/common';
import { Details } from 'components/common/Text';

import dev from 'assets/vector/vector-top.svg';
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
    <>
      <Wrapper id="about">
        <Header />
        <IntroWrapper as={Container}>
          <Details>
            <h1>Hello, I'm Léu Almeida</h1>
            <h4>I am {name}</h4>
            <h6>Stalk me in</h6>
            <SocialIcons>
              <ButtonIcon href="https://github.com/LeuAlmeida" data-tip data-for="github">
                <FaGithub color="#FFF" size={18} />
              </ButtonIcon>
              <ButtonIcon href="https://www.behance.net/almeida99" data-tip data-for="behance">
                <FaBehance color="#FFF" size={18} />
              </ButtonIcon>
              <ButtonIcon href="https://www.linkedin.com/in/leonardoalmeida99/" data-tip data-for="linkedin">
                <FaLinkedin color="#FFF" size={18} />
              </ButtonIcon>
              <ButtonIcon href="https://www.instagram.com/1bigo/" data-tip data-for="instagram">
                <FaInstagram color="#FFF" size={18} />
              </ButtonIcon>
              <ButtonIcon href="https://www.facebook.com/leuzinhopataty" data-tip data-for="facebook">
                <FaFacebookF color="#FFF" size={18} />
              </ButtonIcon>
              <ButtonIcon href="https://leunardo.dev/cv" data-tip data-for="cv">
                <FaFilePdf color="#FFF" size={18} />
              </ButtonIcon>
            </SocialIcons>
          </Details>
          <Thumbnail>
            <img src={dev} alt="Hello! My name is Leonardo Almeida, but you can call me Léu :)" />
          </Thumbnail>
        </IntroWrapper>
      </Wrapper>

      <ReactTooltip id="linkedin" type="dark" effect="solid">
        <span>LinkedIn</span>
      </ReactTooltip>
      <ReactTooltip id="instagram" type="dark" effect="solid">
        <span>Instagram</span>
      </ReactTooltip>
      <ReactTooltip id="facebook" type="dark" effect="solid">
        <span>Facebook</span>
      </ReactTooltip>
      <ReactTooltip id="cv" type="dark" effect="solid">
        <span>Curriculum</span>
      </ReactTooltip>
    </>
  );
}
