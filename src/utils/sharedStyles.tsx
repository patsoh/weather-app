import styled from 'styled-components';

export const DescriptionError = styled.span`
  text-align: center;
  color: ${props => props.theme.colors.red};
  font-size: 22px;

  @media (max-width: ${props => props.theme.media.mobile}) {
    font-size: 16px;
  }
`;