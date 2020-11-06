import React from 'react';
import { Header } from './Header/Header';

export const App = (props) => (
  <>
    <Header/>
    {props.content}
  </>
);
