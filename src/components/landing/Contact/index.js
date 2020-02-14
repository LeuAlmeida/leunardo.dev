import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Details } from 'components/common/Text';
import { Wrapper, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="Hello! My name is Leonardo Almeida, but you can call me Léu :)" />
    </Thumbnail>
  </Wrapper>
);
