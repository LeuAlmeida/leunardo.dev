import React from 'react';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children }) => (
  <>
    <Global />
    {children}
  </>
);
