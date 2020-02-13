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
          <div className="box">
            <ul id="first-list">
              <Timeline
                title="Opportunity in Germany"
                description=""
                company=""
                start="JAN, 2021"
                end="BEYOND"
                supEnd=""
                future
              />
              {jobs.map(job => (
                <Timeline
                  key={job.title}
                  title={job.title}
                  description={job.description}
                  company={job.company}
                  start={job.start}
                  end={job.end}
                />
              ))}
            </ul>
          </div>
        </Details>
      </Container>
    </>
  );
}
