import React from 'react';
import { connect } from 'react-redux';

import { Container } from 'components/common';
import { Details } from 'components/common/Text';
import { FaGithub, FaBehance, FaLinkedin, FaInstagram, FaFacebookF, FaFilePdf } from 'react-icons/fa';
import { Wrapper, Flex, Links } from './styles';

function Footer() {
  return (
    <Wrapper>
      <Flex as={Container}>
        <Details>
          <h2>Léu Almeida</h2>
          <span>
            © Copyrights {new Date().getFullYear()} | Made with{' '}
            <span aria-label="love" role="img">
              💖
            </span>{' '}
            and{' '}
            <span aria-label="love" role="img">
              ☕
            </span>{' '}
            by <a href="mailto:leo@webid.net.br">Léu Almeida</a>
          </span>
        </Details>
        <Links>
          <a href="https://github.com/LeuAlmeida" target="_blank" rel="noopener noreferrer" data-tip data-for="github">
            <FaGithub color="#000" size={16} />
          </a>
          <a
            href="https://www.behance.net/almeida99"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="behance"
          >
            <FaBehance color="#000" size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/leonardoalmeida99/"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="linkedin"
          >
            <FaLinkedin color="#000" size={16} />
          </a>
          <a
            href="https://www.instagram.com/1bigo/"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="instagram"
          >
            <FaInstagram color="#000" size={16} />
          </a>
          <a
            href="https://www.facebook.com/leuzinhopataty"
            target="_blank"
            rel="noopener noreferrer"
            data-tip
            data-for="facebook"
          >
            <FaFacebookF color="#000" size={16} />
          </a>
          <a href="https://leunardo.dev/cv" target="_blank" rel="noopener noreferrer" data-tip data-for="cv">
            <FaFilePdf color="#000" size={16} />
          </a>
        </Links>
      </Flex>
    </Wrapper>
  );
}

export default connect(state => ({
  language: state.language,
}))(Footer);
