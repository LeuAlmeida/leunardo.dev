import React from 'react';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Personal = () => (
  <Wrapper id="myself">
    <SkillsWrapper as={Container}>
      {/* <Thumbnail></Thumbnail> */}
      <Details>
        <h1>Who I am</h1>
        <p>
          Hello! My name is Leonardo Almeida, but you can call me Léu :)
          <br />
          I’m 20 years old and I’m a tech enthusiast with a focus on front-end. Alongside this I also seek to learn
          about back-end so I can become a full stack developer. I also have experience on audiovisual production, 3D
          modeling and Graphic Design for occasional needs.
          <br />
          I’ve been involved with this market for a decade, when I was only 10 years old and started studying Basic
          HTML. Since then my crave for learning only got bigger.
          <br />
          My projects are focused on the user experience and it’s usability as a whole, aiming for a good relationship
          between user and platform - whether it’s a system or a full website.
          <br />
        </p>
        <p>
          From my perspective, proactivity and optimism should walk side by side in a way that great results are
          achieved on a relaxed workspace.
        </p>
        <p>Now that you know a little about me, let’s grab a coffee?</p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
