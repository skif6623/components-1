import React from 'react';
import ContainerStyles from './Container.styled';

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
