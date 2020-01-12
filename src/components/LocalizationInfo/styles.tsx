import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Description = styled.span`
  font-size: 22px;
  text-align: center;

  @media (max-width: ${props => props.theme.media.mobile}) {
    font-size: 16px;
  }
`;