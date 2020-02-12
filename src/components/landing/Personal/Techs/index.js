import React from 'react';
import { Details, Container } from './styles';
import { TitleWrapper, H2, SubTitle } from '../../../common/Text';

function Techs() {
  return (
    <>
      <Container>
        <TitleWrapper>
          <H2>About Me</H2>
          <SubTitle>Personal</SubTitle>
        </TitleWrapper>
        <Details>
          <h3>Tastes and Quirks</h3>
        </Details>
      </Container>
    </>
  );
}

export default Techs;
