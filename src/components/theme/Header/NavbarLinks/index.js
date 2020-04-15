import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

function NavbarLinks({ desktop, language }) {
  const dispatch = useDispatch();

  const [lang, setLang] = useState('english');

  useEffect(() => {
    let currentLang;

    const userlang = navigator.language || navigator.userLanguage;
    if (userlang === 'pt-BR' || userlang === 'pt') {
      currentLang = 'portuguese';
    } else if (userlang === 'de') {
      currentLang = 'germany';
    } else {
      currentLang = 'english';
    }

    dispatch({
      type: 'SET_LANGUAGE',
      language: currentLang,
    });
  }, [dispatch]);

  function setAsLanguage(language) {
    if (language === 'portuguese') {
      dispatch({
        type: 'SET_LANGUAGE',
        language,
      });

      if (lang === 'portuguese') {
        toast.info(`Você já está aqui. 😜`);
        return null;
      }

      toast.success(`Agora você está na versão em português.`);
      setLang('portuguese');
    }

    if (language === 'english') {
      dispatch({
        type: 'SET_LANGUAGE',
        language,
      });

      if (lang === 'english') {
        toast.info(`You're already here. 😜`);
        return null;
      }

      toast.success(`Now you're in the English version.`);
      setLang('english');
    }

    if (language === 'german') {
      if (lang === 'english') {
        toast.error(`German translation doesn't available yet. 😓`);
        return null;
      }
      if (lang === 'portuguese') {
        toast.error(`O idioma alemão ainda não está disponível. 😓`);
        return null;
      }
    }
  }

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
          <button onClick={() => setAsLanguage('portuguese')} type="button">
            🇧🇷
          </button>
          <button onClick={() => setAsLanguage('english')} type="button">
            🇬🇧
          </button>
          <button onClick={() => setAsLanguage('german')} type="button">
            🇩🇪
          </button>
        </>
      )}
      {lang === 'portuguese' && (
        <>
          <AnchorLink href="#pinned">Repositórios</AnchorLink>
          <AnchorLink href="#portfolio">Portfólio</AnchorLink>
          <AnchorLink href="#myself">Quem sou eu</AnchorLink>
          <AnchorLink href="#experience">Experiência</AnchorLink>
          <AnchorLink href="#contact">Contato</AnchorLink>
          <button onClick={() => setAsLanguage('portuguese')} type="button">
            🇧🇷
          </button>
          <button onClick={() => setAsLanguage('english')} type="button">
            🇬🇧
          </button>
          <button onClick={() => setAsLanguage('german')} type="button">
            🇩🇪
          </button>
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
