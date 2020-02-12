import styled from 'styled-components';

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

export const TastesQuirksRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;

  @media (max-width: 410px) {
    display: grid;
    width: 100%;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

export const TasteOrQuirk = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    text-transform: uppercase;
    color: #7178fc;
    font-size: 22px;
    margin-top: 8px;
  }
`;
