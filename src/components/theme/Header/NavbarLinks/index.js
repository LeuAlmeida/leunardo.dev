import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    {/* <AnchorLink href="#about">About</AnchorLink> */}
    <AnchorLink href="#pinned">Repositories</AnchorLink>
    <AnchorLink href="#portfolio">Portfolio</AnchorLink>
    <AnchorLink href="#myself">Who I am</AnchorLink>
    <AnchorLink href="#experience">Experience</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
  </Wrapper>
);

NavbarLinks.propTypes = {
  desktop: PropTypes.bool,
};

export default NavbarLinks;
