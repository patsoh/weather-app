import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.gray};
  width: 300px;
  height: 250px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.theme.colors.black};
  margin: 0 auto;

  @media (max-width: ${props => props.theme.media.mobile}) {
    width: 260px;
    height: 140px;
  }
`;

export const City = styled.span`
  font-size: 26px;
  text-align: center;

  @media (max-width: ${props => props.theme.media.mobile}) {
    font-size: 20px;
  }
`;

export const Date = styled.span`
  font-size: 22px;
  text-align: center;

  @media (max-width: ${props => props.theme.media.mobile}) {
    font-size: 16px;
  }
`;