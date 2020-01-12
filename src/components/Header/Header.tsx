import React from 'react';
import { IProps } from './interfaces';
import { 
  Wrapper,
  Heading,
  Hamburger
} from './styles';

export const Header: React.SFC<IProps> = ({ 
  toggleSidebar
}) => {
  return (
    <Wrapper>
      <Hamburger
        onClick={toggleSidebar}
      />
      <Heading>
        Weather App
      </Heading>
    </Wrapper>
  );
}