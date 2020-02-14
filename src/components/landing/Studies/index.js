import React from 'react';
import PropTypes from 'prop-types';
import { resolve } from 'path';
import { TitleWrapper, H2, SubTitle, Details } from '../../common/Text';
import { Container, SkillCard, CardsSection } from './styles';

function CardStudy({ color, image, name, company, duration, description, certificate, dark }) {
  return (
    <>
      <a href={certificate || '#'} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
        <SkillCard>
          <header className={`skill-card__header ${color}`}>
            <img className="skill-card__icon" src={image} alt={name} />
          </header>

          <section className="skill-card__body">
            <h2 className="skill-card__title">{name}</h2>
            {company ? (
              <span className={`skill-card__company ${color}`} style={dark ? { color: '#333' } : { color: '#fff' }}>
                {company}
              </span>
            ) : (
              ''
            )}
            <span className="skill-card__duration">{duration}</span>
            <ul className="skill-card__knowledge">
              <li>{description}</li>
            </ul>
          </section>
        </SkillCard>
      </a>
    </>
  );
}

export function Studies() {
  return (
    <Container>
      <TitleWrapper>
        <H2>Hello World</H2>
        <SubTitle>Studies</SubTitle>
      </TitleWrapper>
      <Details>
        <h3>Certificates and Courses</h3>
        <CardsSection>
          <CardStudy
            name="Bachelor's Degree"
            image="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            company="Universidade Metodista de São Paulo"
            duration="December 2020 (4 years) by Universidade Metodista de São Paulo"
            color="orange"
            description="Graduated by the Methodist University of São Paulo in Rudge Ramos – São Bernardo do Campo, with 4 years of duration."
          />
          <CardStudy
            name="Digital Marketing"
            image="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            duration="December 2018 (5 hours)"
            company="Getulio Vargas Foundation"
            color="blue"
            description="Self-institutional online course from the Getúlio Vargas Foundation that explains and teaches the foundations and techniques of the Digital Marketing and it’s applications."
            certificate={resolve(__dirname, 'assets', 'certificates', 'marketing-digital.pdf')}
          />
          <CardStudy
            name="Information Technology and Communication"
            image="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            duration="December 2018 (14 hours)"
            company="SENAI"
            color="red"
            description="Introductory course about information technology and communication, that aims for the knowledge about hardware, network security notions, among other modules about the basic notios of ITC."
            certificate={resolve(__dirname, 'assets', 'certificates', 'tic.pdf')}
          />
          <CardStudy
            name="Search Engine Optimization"
            image="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            company="Udemy by Ricardo Zacho"
            duration="December 2018 (5 hours)"
            color="green"
            description="Introductory course about information technology and communication, that aims for the knowledge about hardware, network security notions, among other modules about the basic notios of ITC."
            certificate={resolve(__dirname, 'assets', 'certificates', 'seo.pdf')}
          />
          <CardStudy
            name="Interface Design"
            image="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            company="Udemy by Jamilton Damasceno +2"
            duration="December 2018 (15 hours)"
            color="yellow"
            dark
            description="Online Course to improve on theory and practice the concepts of UX and UI Design, Information Architecture, Prototyping as well as concepts of Usability, Wireframes and Layouts, Organizations and navigation Systems and much more."
            certificate={resolve(__dirname, 'assets', 'certificates', 'ux-ui.pdf')}
          />
          <CardStudy
            name="Bootstrap 4"
            image="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            company="Udemy by Ponto Courses"
            duration="December 2018 (10,5 hours)"
            color="purple"
            description="Complete Course of one of the biggest open source CSS frameworks. Learning about all the functionalities and options that the Bootstrap gives to the developer and to the consumer."
            certificate={resolve(__dirname, 'assets', 'certificates', 'bootstrap.pdf')}
          />
          <CardStudy
            name="Tourism Monitoring"
            image="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            company="Forma Turismo"
            duration="February 2017 (40 hours)"
            color="yellow"
            description="A 40 hours course focused on the communicational accomplishment of Tourism. With neurolinguistics programming (NLP), Verbal and Non-Verbal communication, among other techniques that work with communication for the public."
            certificate={resolve(__dirname, 'assets', 'certificates', 'tic.pdf')}
          />
          <CardStudy
            name="After Effects"
            image="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            company="Puflix"
            duration="November 2017 (11 hours)"
            color="purple"
            description="Practical and theoretical course of After Effects CC done online in 2017 to improve the knowledge on animation and professional video editing."
            certificate={resolve(__dirname, 'assets', 'certificates', 'tic.pdf')}
          />
          <CardStudy
            name="Computer Graphics"
            image="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            company="SAGA"
            duration="November 2017 (11 hours)"
            color="grey"
            description="Professional course of Computer Graphics done in Tatuapé (East Side of São Paulo), with a duration of 3 years. Modules on many softwares, such as After effects, Adobe Premiere, Dreamweaver, Fireworks, Photoshop, Autodesk Maya, and Digital Painting Techniques."
            certificate={resolve(__dirname, 'assets', 'certificates', 'tic.pdf')}
          />
          <CardStudy
            name="Introduction to Web Design"
            image="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            company="Objetiva School"
            duration="March 2010"
            color="blue"
            description="Introductory course of Web Design in software such as Macromedia Flash 8, Macromedia Fireworks 8, Macromedia Dreamweaver 8, that would eventually become Basic Adobe HTML, Basic CSS."
            certificate={resolve(__dirname, 'assets', 'certificates', 'tic.pdf')}
          />
        </CardsSection>
      </Details>
    </Container>
  );
}

CardStudy.propTypes = {
  color: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
  duration: PropTypes.string,
  description: PropTypes.string,
  certificate: PropTypes.string,
  dark: PropTypes.bool,
};
