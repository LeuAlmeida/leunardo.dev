import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  padding: 2rem 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const Badges = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(9, 1fr);
  gap: 10px;

  @media (max-width: 410px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .ui.image.label .detail {
    width: 100%;
  }

  .ui.image.label .detail {
    white-space: nowrap;
  }
`;
