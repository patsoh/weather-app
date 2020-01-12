import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 100px;
  padding-top: 20px;

  @media (max-width: ${props => props.theme.media.mobile}) {
    padding-bottom: 20px;
  }
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.black};
  padding: 10px;
  margin: 0 auto;
  display: block;

  &:focus, active {
    outline: 0;
  }

  &::placeholder {
    text-align: center;
  }

  @media (max-width: ${props => props.theme.media.mobile}) {
    font-size: 14px;

    &::placeholder {
      font-size: 14px;
    }
  }
`;

