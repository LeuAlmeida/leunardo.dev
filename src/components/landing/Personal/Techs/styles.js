import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Parallax Image */
  background-image: url('https://www.w3schools.com/howto/img_parallax.jpg');
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  @media only screen and (max-width: 960px) {
    padding-top: 4rem;

    h1,
    h3 {
      margin-left: 10%;
    }
  }

  @media only screen and (max-width: 568px) {
    padding-top: 4rem;

    h1,
    h3 {
      margin-left: 10%;
    }
  }

  h1,
  h3 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 14pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;
