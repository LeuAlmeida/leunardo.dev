import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

function NavbarLinks({ desktop, language }) {
  const [lang, setLang] = useState('english');

  useEffect(() => {
    setLang(language || lang);
  }, [lang, language]);

  return (
    <Wrapper desktop={desktop}>
      {lang === 'english' && (
        <>
          <AnchorLink href="#pinned">Repositories</AnchorLink>
          <AnchorLink href="#portfolio">Portfolio</AnchorLink>
          <AnchorLink href="#myself">Who I am</AnchorLink>
          <AnchorLink href="#experience">Experience</AnchorLink>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </>
      )}
      {lang === 'portuguese' && (
        <>
          <AnchorLink href="#pinned">Repositórios</AnchorLink>
          <AnchorLink href="#portfolio">Portfólio</AnchorLink>
          <AnchorLink href="#myself">Quem sou eu</AnchorLink>
          <AnchorLink href="#experience">Experiência</AnchorLink>
          <AnchorLink href="#contact">Contato</AnchorLink>
        </>
      )}
    </Wrapper>
  );
}

export default connect(state => ({
  language: state.portuguese,
}))(NavbarLinks);

NavbarLinks.propTypes = {
  desktop: PropTypes.bool,
};
