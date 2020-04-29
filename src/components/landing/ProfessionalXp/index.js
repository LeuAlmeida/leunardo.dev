import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Timeline from '../../common/Timeline';
import { TitleWrapper, H2, SubTitle, Details } from '../../common/Text';
import { Container } from './styles';

import { jobs } from './jobs';

function ProfessionalXp({ language }) {
  const [lang, setLang] = useState('english');

  useEffect(() => {
    setLang(language || lang);
  }, [lang, language]);
  return (
    <>
      <Container id="experience">
        <TitleWrapper>
          {lang === 'english' && (
            <>
              <H2>#SendJobs</H2>
              <SubTitle>Past Jobs</SubTitle>
            </>
          )}
          {lang === 'portuguese' && (
            <>
              <H2>#MandaJobs</H2>
              <SubTitle>Profissional</SubTitle>
            </>
          )}
          {lang === 'german' && (
            <>
              <H2>#JobsSenden</H2>
              <SubTitle>Fachmann</SubTitle>
            </>
          )}
        </TitleWrapper>
        <Details>
          {lang === 'english' && <h3>Professional Experience</h3>}
          {lang === 'portuguese' && <h3>Experiência Profissional</h3>}
          {lang === 'german' && <h3>Berufserfahrung</h3>}
          <div className="box">
            <ul id="first-list">
              <Timeline
                title={
                  (lang === 'english' && 'Opportunity in Germany') ||
                  (lang === 'portuguese' && 'Oportunidade na Alemanha') ||
                  (lang === 'german' && 'Gelegenheit in Deutschland')
                }
                description=""
                company=""
                start="JAN, 2021"
                end={
                  (lang === 'english' && 'BEYOND') ||
                  (lang === 'portuguese' && 'ALÉM') ||
                  (lang === 'german' && 'ZUKUNFT')
                }
                supEnd=""
                future
              />
              {lang === 'english' &&
                jobs.english.map(job => (
                  <Timeline
                    key={job.title}
                    title={job.title}
                    description={job.description}
                    company={job.company}
                    start={job.start}
                    end={job.end}
                  />
                ))}
              {lang === 'portuguese' &&
                jobs.portuguese.map(job => (
                  <Timeline
                    key={job.title}
                    title={job.title}
                    description={job.description}
                    company={job.company}
                    start={job.start}
                    end={job.end}
                  />
                ))}
              {lang === 'german' &&
                jobs.german.map(job => (
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

export default connect(state => ({
  language: state.portuguese,
}))(ProfessionalXp);
