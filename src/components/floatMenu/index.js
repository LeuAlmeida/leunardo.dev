import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { connect, useDispatch } from 'react-redux';
import { Menu } from './styles';

function FloatMenu(props) {
  const [lang, setLang] = useState('');

  const dispatch = useDispatch();

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
  }, [dispatch, props]);

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

  return (
    <>
      <Menu>
        <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="hamburger hamburger-1"></span>
          <span className="hamburger hamburger-2"></span>
          <span className="hamburger hamburger-3"></span>
        </label>

        <button onClick={() => setAsLanguage('portuguese')} type="button" className="menu-item">
          {' '}
          🇧🇷
        </button>

        <button type="button" onClick={() => setAsLanguage('english')} className="menu-item">
          {' '}
          🇬🇧
        </button>
        <button type="button" onClick={() => setAsLanguage('germany')} className="menu-item">
          {' '}
          🇩🇪
        </button>
        <a
          href="mailto:leo@webid.net.br"
          onClick={() => {
            lang === 'english' && toast.success(`Redirecting you to contact me via email. 📨`);
            lang === 'portuguese' && toast.success(`Te redirecionando para falar comigo via e-mail. 📨`);
          }}
          className="menu-item"
        >
          {' '}
          💌
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5511938045313"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            lang === 'english' && toast.success(`Redirecting you to contact me via WhatsApp. 📞`);
            lang === 'portuguese' && toast.success(`Te redirecionando para falar comigo via WhatsApp. 📞`);
          }}
          className="menu-item"
        >
          {' '}
          📞
          <i className="fa fa-cog"></i>{' '}
        </a>
      </Menu>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }} version="1.1">
        <defs>
          <filter id="shadowed-goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
            <feColorMatrix
              in="shadow"
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
              result="shadow"
            />
            <feOffset in="shadow" dx="1" dy="1" result="shadow" />
            <feBlend in2="shadow" in="goo" result="goo" />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default connect()(FloatMenu);
