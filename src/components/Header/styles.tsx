import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  z-index: 25;
`;

export const Heading = styled.h1`
  font-size: 24px;
  margin: 0 0 0 auto;
  display: block;
  text-align: right;
`;

export const Hamburger = styled(FaBars)`
  font-size: 20px;
  cursor: pointer;
`;