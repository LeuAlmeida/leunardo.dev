import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
  overflow: hidden;
  padding: 4rem 0;
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

export const InterestSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;
