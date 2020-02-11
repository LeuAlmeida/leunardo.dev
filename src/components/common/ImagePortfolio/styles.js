import styled from 'styled-components';
// import 'https://fonts.googleapis.com/css?family=Raleway:400,800,300';

export const Grid = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 1em 0 4em;
  max-width: 1000px;
  list-style: none;
  text-align: center;

  & figure {
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
    border-radius: 4px;
    position: relative;
    float: left;
    overflow: hidden;
    margin: 10px 1%;
    min-width: 320px;
    /* max-width: 600px;
    max-height: 400px; */
    /* width: 48%; */
    text-align: center;
    cursor: pointer;
  }

  & figure img {
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
    /* opacity: 0.8; */
  }

  & figure figcaption {
    padding: 2em;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  & figure figcaption::before,
  & figure figcaption::after {
    pointer-events: none;
  }

  & figure figcaption,
  & figure figcaption > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Anchor will cover the whole item by default */
  /* For some effects it will show as a button */
  & figure figcaption > a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
  }

  & figure h2 {
    word-spacing: -0.15em;
    font-weight: 300;
  }

  & figure h2 span {
    font-weight: 800;
  }

  & figure h2,
  & figure p {
    margin: 0;
  }

  & figure p {
    letter-spacing: 1px;
    font-size: 68.5%;
  }

  /*---------------*/
  /***** Zoe *****/
  /*---------------*/

  figure.effect-zoe figcaption {
    top: auto;
    bottom: 0;
    padding: 1em;
    height: 3.75em;
    background: #fff;
    color: #3c4a50;
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  figure.effect-zoe h2 {
    float: left;
  }

  figure.effect-zoe p.icon-links a {
    float: right;
    color: #3c4a50;
    font-size: 1.4em;
  }

  figure.effect-zoe:hover p.icon-links a:hover,
  figure.effect-zoe:hover p.icon-links a:focus {
    color: #252d31;
  }

  figure.effect-zoe p.description {
    position: absolute;
    bottom: 8em;
    padding: 2em;
    color: #fff;
    text-transform: none;
    font-size: 90%;
    opacity: 0;
    -webkit-transition: opacity 0.35s;
    transition: opacity 0.35s;
    -webkit-backface-visibility: hidden; /* Fix for Chrome 37.0.2062.120 (Mac) */
  }

  figure.effect-zoe h2,
  figure.effect-zoe p.icon-links a {
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, 200%, 0);
    transform: translate3d(0, 200%, 0);
  }

  figure.effect-zoe p.icon-links a span::before {
    display: inline-block;
    padding: 8px 10px;
    font-family: 'feathericons';
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-eye::before {
    content: '\e000';
  }

  .icon-paper-clip::before {
    content: '\e001';
  }

  .icon-heart::before {
    content: '\e024';
  }

  figure.effect-zoe h2 {
    display: inline-block;
  }

  figure.effect-zoe:hover p.description {
    opacity: 1;
  }

  figure.effect-zoe:hover figcaption,
  figure.effect-zoe:hover h2,
  figure.effect-zoe:hover p.icon-links a {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  figure.effect-zoe:hover h2 {
    -webkit-transition-delay: 0.05s;
    transition-delay: 0.05s;
  }

  figure.effect-zoe:hover p.icon-links a:nth-child(3) {
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }

  figure.effect-zoe:hover p.icon-links a:nth-child(2) {
    -webkit-transition-delay: 0.15s;
    transition-delay: 0.15s;
  }

  figure.effect-zoe:hover p.icon-links a:first-child {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

  @media screen and (max-width: 50em) {
    .content {
      padding: 0 10px;
      text-align: center;
    }
    .grid figure {
      display: inline-block;
      float: none;
      margin: 10px auto;
      width: 100%;
    }
  }
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }
  .clearfix:after {
    clear: both;
  }

  .content {
    margin: 0 auto;
    max-width: 1000px;
  }

  .content > h2 {
    clear: both;
    margin: 0;
    padding: 4em 1% 0;
    color: #484b54;
    font-weight: 800;
    font-size: 1.5em;
  }

  .content > h2:first-child {
    padding-top: 0em;
  }

  /* Header */
  .codrops-header {
    margin: 0 auto;
    padding: 4em 1em;
    text-align: center;
  }

  .codrops-header h1 {
    margin: 0;
    font-weight: 800;
    font-size: 4em;
    line-height: 1.3;
  }

  .codrops-header h1 span {
    display: block;
    padding: 0 0 0.6em 0.1em;
    color: #74777b;
    font-weight: 300;
    font-size: 45%;
  }

  /* Demo links */
  .codrops-demos {
    clear: both;
    padding: 1em 0 0;
    text-align: center;
  }

  .content + .codrops-demos {
    padding-top: 5em;
  }

  .codrops-demos a {
    display: inline-block;
    margin: 0 5px;
    padding: 1em 1.5em;
    text-transform: uppercase;
    font-weight: bold;
  }

  .codrops-demos a:hover,
  .codrops-demos a:focus,
  .codrops-demos a.current-demo {
    background: #3c414a;
    color: #fff;
  }

  /* To Navigation Style */
  .codrops-top {
    width: 100%;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 0.69em;
    line-height: 2.2;
  }

  .codrops-top a {
    display: inline-block;
    padding: 1em 2em;
    text-decoration: none;
    letter-spacing: 1px;
  }

  .codrops-top span.right {
    float: right;
  }

  .codrops-top span.right a {
    display: block;
    float: left;
  }

  .codrops-icon:before {
    margin: 0 4px;
    text-transform: none;
    font-weight: normal;
    font-style: normal;
    font-variant: normal;
    font-family: 'codropsicons';
    line-height: 1;
    speak: none;
    -webkit-font-smoothing: antialiased;
  }

  .codrops-icon-drop:before {
    content: '\e001';
  }

  .codrops-icon-prev:before {
    content: '\e004';
  }

  /* Related demos */
  .related {
    clear: both;
    padding: 6em 1em;
    font-size: 120%;
  }

  .related > a {
    display: inline-block;
    margin: 20px 10px;
    padding: 25px;
    border: 1px solid #4f7f90;
    text-align: center;
  }

  .related a:hover {
    border-color: #39545e;
  }

  .related a img {
    max-width: 100%;
    opacity: 0.8;
  }

  .related a:hover img,
  .related a:active img {
    opacity: 1;
  }

  .related a h3 {
    margin: 0;
    padding: 0.5em 0 0.3em;
    max-width: 300px;
    text-align: left;
  }

  /* Demo ad design */
  body #cdawrap {
    background: none;
    top: 50px;
    border: none;
  }

  body #cdawrap a {
    color: #fff !important;
  }

  body #cda-remove {
    color: #fff;
  }

  @media screen and (max-width: 25em) {
    .codrops-header {
      font-size: 75%;
    }
    .codrops-icon span {
      display: none;
    }
  }
`;
