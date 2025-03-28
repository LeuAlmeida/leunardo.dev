import styled from 'styled-components';
import { lighten } from 'polished';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-self: flex-start;
`;

export const H2 = styled.h2`
  font-size: 30px;
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

  @media only screen and (max-width: 960px) {
    font-size: 16px;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  a {
    font-weight: bold;
    color: #7178fc;
    transition: color 0.3s;
  }

  a:hover {
    color: ${lighten(0.3, '#000')} !important;
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  h6 {
    font-size: 16pt;
  }

  h4 {
    font-size: 26pt;
    color: #8c8c8c;
    font-weight: 400;
  }

  @media only screen and (max-width: 960px) {
    padding-left: unset;
    width: 100%;
    padding-top: 4rem;

    h3 {
      padding-left: 5px;
    }

    h1,
    h4 {
      margin-left: 10%;
    }

    h4 {
      font-size: 18pt;
    }

    h6 {
      font-size: 12pt;
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
    font-size: 38pt;
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
