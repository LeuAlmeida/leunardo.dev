import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Menu } from './styles';

import 'react-toastify/dist/ReactToastify.css';

function FloatMenu() {
  return (
    <>
      <ToastContainer autoClose={4000} />
      <Menu>
        <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="hamburger hamburger-1"></span>
          <span className="hamburger hamburger-2"></span>
          <span className="hamburger hamburger-3"></span>
        </label>

        <button
          onClick={() => toast.error(`Portuguese translation doesn't available yet. 😓`)}
          type="button"
          className="menu-item"
        >
          {' '}
          🇧🇷
        </button>
        <button type="button" onClick={() => toast.info(`Do you're already here. 😜`)} className="menu-item">
          {' '}
          🇬🇧
        </button>
        <button
          type="button"
          onClick={() => toast.error(`German translation doesn't available yet. 😓`)}
          className="menu-item"
        >
          {' '}
          🇩🇪
        </button>
        <a
          href="mailto:leo@webid.net.br"
          onClick={() => toast.success(`Redirecting you to contact me via email. 📨`)}
          className="menu-item"
        >
          {' '}
          💌
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5511938045313"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => toast.success(`Redirecting you to contact me via WhatsApp. 📞`)}
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

export default FloatMenu;
