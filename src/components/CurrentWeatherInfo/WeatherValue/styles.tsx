import styled from 'styled-components';

export const Label = styled.span`
  font-size: 20px;

  @media (max-width: ${props => props.theme.media.mobile}) {
    font-size: 14px;
  }
`;

export const ValueWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Value = styled.span`
  color: ${props => props.theme.colors.black};
  font-size: 20px;
  margin-left: 5px;

  @media (max-width: ${props => props.theme.media.mobile}) {
    font-size: 14px;
  }
`;