import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Logo } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Logo />
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
