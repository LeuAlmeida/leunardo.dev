import React from 'react';
import { FaCode, FaPencilRuler } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Details, Container, Badges } from './styles';
import { TitleWrapper, H2, SubTitle } from '../../../common/Text';

function Tech({ name, color, icon }) {
  return (
    <a
      className={`ui ${color} image label`}
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {icon === 'code' ? <FaCode color="#FFF" size={14} /> : <FaPencilRuler color="#FFF" size={14} />}
      <div className="detail">{name}</div>
    </a>
  );
}

Tech.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
};

function Techs() {
  return (
    <>
      <Container style={{ paddingTop: 40 }}>
        <TitleWrapper>
          <H2>About Me</H2>
          <SubTitle>Personal</SubTitle>
        </TitleWrapper>
        <Details>
          <h3>Technical Skills</h3>
        </Details>
      </Container>
      <Container style={{ paddingBottom: 40 }}>
        <Badges>
          <Tech color="blue" name="CSS3" icon="code" />
          <Tech color="red" name="HTML5" icon="code" />
          <Tech color="yellow" name="ES6" icon="code" />
          <Tech color="purple" name="React Native" icon="code" />
          <Tech color="blue" name="ReactJS" icon="code" />
          <Tech color="purple" name="Redux" icon="code" />
          <Tech color="pink" name="Styled Components" icon="code" />
          <Tech color="green" name="SSH" icon="code" />
          <Tech color="green" name="Node.js" icon="code" />
          <Tech color="blue" name="PHP" icon="code" />
          <Tech color="pink" name="SASS" icon="code" />
          <Tech color="orange" name="Laravel" icon="code" />
          <Tech color="green" name="MongoDB" icon="code" />
          <Tech color="black" name="Git" icon="code" />
          <Tech color="blue" name="PostgreSQL" icon="code" />
          <Tech color="orange" name="SEO" icon="design" />
          <Tech color="pink" name="Prototyping" icon="design" />
          <Tech color="red" name="UX/UI" icon="design" />
          <Tech color="purple" name="Adobe Premiere" icon="design" />
          <Tech color="blue" name="Photoshop" icon="design" />
          <Tech color="yellow" name="Illustrator" icon="design" />
        </Badges>
      </Container>
    </>
  );
}

export default Techs;
