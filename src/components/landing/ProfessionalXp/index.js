import React from 'react';
import Timeline from '../../common/Timeline';
import { TitleWrapper, H2, SubTitle, Details } from '../../common/Text';
import { Container } from './styles';

export function ProfessionalXp() {
  return (
    <>
      <Container>
        <TitleWrapper>
          <H2>#SendJobs</H2>
          <SubTitle>Past Jobs</SubTitle>
        </TitleWrapper>
        <Details>
          <h3>Professional Experience</h3>
          <Timeline
            title="comment #01"
            description="the best animation , the best toturials you would ever see ."
            name="- dr. mohamed -"
            start="JUN, 17"
            sup="th"
            end="12:00 AM"
          />
        </Details>
      </Container>
    </>
  );
}
