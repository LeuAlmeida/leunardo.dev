import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-left: 10%; */
  width: 200px;
  align-self: flex-start;
`;

export const H2 = styled.h2`
  font-size: 32px;
  color: #7178fc;
  margin-bottom: 0 !important;

  &:before {
    content: '';
    margin-bottom: 4px;
    display: block;
    width: 50px;
    height: 5px;
    border-radius: 10px;
    background: #7178fc;
  }
`;

export const SubTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #666;
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  a {
    font-weight: bold;
    color: #7178fc;
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  h4 {
    font-size: 26pt;
    color: #8c8c8c;
    font-weight: 400;
  }

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  @media only screen and (max-width: 960px) {
    padding-top: 4rem;

    h1,
    h4 {
      margin-left: 10%;
    }

    h4 {
      font-size: 26pt;
    }
  }

  @media only screen and (max-width: 568px) {
    padding-top: 4rem;

    h1 {
      margin-left: 10%;
      font-size: 28pt;
    }
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 40pt;
    color: #212121;
  }
  h3 {
    margin-bottom: 2rem;
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
