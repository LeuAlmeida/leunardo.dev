import React from 'react';
import Timeline from '../../common/Timeline';
import { TitleWrapper, H2, SubTitle, Details } from '../../common/Text';
import { Container } from './styles';

import { jobs } from './jobs';

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
          {jobs.map(job => (
            <Timeline
              title={job.title}
              description={job.description}
              name={job.name}
              start={job.start}
              sup={job.sup}
              end={job.end}
            />
          ))}
        </Details>
      </Container>
    </>
  );
}
