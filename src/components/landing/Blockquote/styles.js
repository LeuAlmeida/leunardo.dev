import styled from 'styled-components';

export const Container = styled.div`
  background-color: #292a2b;

  .blockquote-wrapper {
    display: flex;
    height: 75vh;
    padding: 0 20px;
    min-height: 400px;
  }

  .blockquote {
    position: relative;
    font-family: 'Barlow Condensed', sans-serif;
    max-width: 620px;
    margin: 80px auto;
    align-self: center;
  }

  .blockquote h5 {
    font-family: 'Abril Fatface', cursive;
    position: relative; /* for pseudos */
    color: #7178fc;
    font-size: 2.8rem;
    font-weight: normal;
    line-height: 1;
    margin: 0;
    border: 2px solid #fff;
    border: solid 2px;
    border-radius: 20px;
    padding: 25px;
  }

  .blockquote h5:after {
    content: '';
    position: absolute;
    border: 2px solid #7178fc;
    border-radius: 0 50px 0 0;
    width: 60px;
    height: 60px;
    bottom: -60px;
    left: 50px;
    border-bottom: none;
    border-left: none;
    z-index: 3;
  }

  .blockquote h5:before {
    content: '';
    position: absolute;
    width: 80px;
    border: 6px solid #292a2b;
    bottom: -3px;
    left: 50px;
    z-index: 2;
  }

  @media all and (min-width: 600px) {
    .blockquote h5 {
      font-size: 3rem;
      line-height: 1.2;
    }
  }

  .blockquote h6 {
    position: relative;
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    padding-top: 15px;
    z-index: 1;
    margin-left: 150px;
    padding-left: 12px;
  }

  .blockquote h6:first-letter {
    margin-left: -12px;
  }
`;
