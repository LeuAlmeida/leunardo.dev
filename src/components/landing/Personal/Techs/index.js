import React from 'react';
import Tag from './Tag';

import { Container, Badges } from './styles';
import { TitleWrapper, H2, SubTitle, Details } from '../../../common/Text';

function Techs() {
  return (
    <>
      <Container>
        <Badges>
          <Tag color="blue" name="CSS3" icon="code" />
          <Tag color="red" name="HTML5" icon="code" />
          <Tag color="yellow" name="ES6" icon="code" />
          <Tag color="purple" name="React Native" icon="code" />
          <Tag color="blue" name="ReactJS" icon="code" />
          <Tag color="purple" name="Redux" icon="code" />
          <Tag color="pink" name="Styled Components" icon="code" />
          <Tag color="green" name="SSH" icon="code" />
          <Tag color="green" name="Node.js" icon="code" />
          <Tag color="blue" name="PHP" icon="code" />
          <Tag color="pink" name="SASS" icon="code" />
          <Tag color="orange" name="Laravel" icon="code" />
          <Tag color="green" name="MongoDB" icon="code" />
          <Tag color="black" name="Git" icon="code" />
          <Tag color="blue" name="PostgreSQL" icon="code" />
          <Tag color="orange" name="SEO" icon="design" />
          <Tag color="pink" name="Prototyping" icon="design" />
          <Tag color="red" name="UX/UI" icon="design" />
          <Tag color="purple" name="Adobe Premiere" icon="design" />
          <Tag color="blue" name="Photoshop" icon="design" />
          <Tag color="yellow" name="Illustrator" icon="design" />
        </Badges>
      </Container>
    </>
  );
}

export default Techs;
