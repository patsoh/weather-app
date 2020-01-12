import styled, { keyframes } from 'styled-components';

export const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
` ;

export const StyledSpinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0,0,0,.3);
  border-radius: 50%;
  border-top-color: black;
  animation: ${Spin} 1s ease-in-out infinite;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;