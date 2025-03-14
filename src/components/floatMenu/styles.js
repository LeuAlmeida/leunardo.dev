import styled from 'styled-components';

export const Menu = styled.nav`
  display: none;

  @media only screen and (max-width: 960px) {
    display: flex;
  }

  -webkit-filter: url('#shadowed-goo');
  filter: url('#shadowed-goo');
  z-index: 99999;

  position: fixed;
  bottom: 0;
  right: 0;
  padding-top: 30px;
  width: calc(50%);
  height: 125px;
  box-sizing: border-box;
  font-size: 20px;
  text-align: left;

  .menu-item,
  .menu-open-button {
    background: #7178fc;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    position: absolute;
    top: 20px;
    color: white;
    text-align: center;
    line-height: 80px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform ease-out 200ms;
    transition: -webkit-transform ease-out 200ms;
    transition: transform ease-out 200ms;
    transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
    border: 0;
    cursor: pointer;
  }

  .menu-open {
    display: none;
  }

  .hamburger {
    width: 25px;
    height: 3px;
    background: white;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -12.5px;
    margin-top: -1.5px;
    -webkit-transition: -webkit-transform 200ms;
    transition: -webkit-transform 200ms;
    transition: transform 200ms;
    transition: transform 200ms, -webkit-transform 200ms;
  }

  .hamburger-1 {
    -webkit-transform: translate3d(0, 8px, 0);
    transform: translate3d(0, -8px, 0);
  }

  .hamburger-2 {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .hamburger-3 {
    -webkit-transform: translate3d(0, 8px, 0);
    transform: translate3d(0, 8px, 0);
  }

  .menu-open:checked + .menu-open-button .hamburger-1 {
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  .menu-open:checked + .menu-open-button .hamburger-2 {
    -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);
    transform: translate3d(0, 0, 0) scale(0.1, 1);
  }
  .menu-open:checked + .menu-open-button .hamburger-3 {
    -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);
    transform: translate3d(0, 0, 0) rotate(-45deg);
  }

  .menu-item:hover {
    transition: background 0.3s;
    background: white;
    color: #7178fc;
  }
  .menu-item:nth-child(3) {
    -webkit-transition-duration: 70ms;
    transition-duration: 70ms;
  }
  .menu-item:nth-child(4) {
    -webkit-transition-duration: 130ms;
    transition-duration: 130ms;
  }
  .menu-item:nth-child(5) {
    -webkit-transition-duration: 190ms;
    transition-duration: 190ms;
  }
  .menu-item:nth-child(6) {
    -webkit-transition-duration: 250ms;
    transition-duration: 250ms;
  }
  .menu-item:nth-child(7) {
    -webkit-transition-duration: 310ms;
    transition-duration: 310ms;
  }

  .menu-open-button {
    z-index: 2;
    -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
    -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    cursor: pointer;
  }

  .menu-open-button:hover {
    -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);
    transform: scale(1.2, 1.2) translate3d(0, 0, 0);
  }

  .menu-open:checked + .menu-open-button {
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
    -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);
    transform: scale(0.8, 0.8) translate3d(0, 0, 0);
  }

  .menu-open:checked ~ .menu-item {
    -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
  }
  .menu-open:checked ~ .menu-item:nth-child(3) {
    -webkit-transition-duration: 160ms;
    transition-duration: 160ms;
    -webkit-transform: translate3d(114.42548px, 11.48084px, 0);
    transform: translate3d(114.42548px, -11.48084px, 0);
  }
  .menu-open:checked ~ .menu-item:nth-child(4) {
    -webkit-transition-duration: 240ms;
    transition-duration: 240ms;
    -webkit-transform: translate3d(77.18543px, 85.2491px, 0);
    transform: translate3d(77.18543px, -85.2491px, 0);
  }
  .menu-open:checked ~ .menu-item:nth-child(5) {
    -webkit-transition-duration: 320ms;
    transition-duration: 320ms;
    -webkit-transform: translate3d(0.09158px, 114.99996px, 0);
    transform: translate3d(0.09158px, -114.99996px, 0);
  }
  .menu-open:checked ~ .menu-item:nth-child(6) {
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
    -webkit-transform: translate3d(-77.04956px, 85.37192px, 0);
    transform: translate3d(-77.04956px, -85.37192px, 0);
  }
  .menu-open:checked ~ .menu-item:nth-child(7) {
    -webkit-transition-duration: 480ms;
    transition-duration: 480ms;
    -webkit-transform: translate3d(-114.40705px, 11.66307px, 0);
    transform: translate3d(-114.40705px, -11.66307px, 0);
  }

  /* svg {
    position: absolute !important;
  } */
`;
