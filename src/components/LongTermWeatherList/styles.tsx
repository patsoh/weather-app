import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  padding: 0;
  list-style-type: none;

  @media (max-width: ${props => props.theme.media.mobile}) {
    margin: 0;
  }
`;

export const ListItem = styled.li`
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid ${props => props.theme.colors.gray};

  &:first-child {
    border-top: 0;
  }

  @media (max-width: ${props => props.theme.media.mobile}) {
    flex-direction: column;
  }
`;

export const ValueWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.gray};
`;

export const Value = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`;

export const Date = styled.span`
  margin-right: 15px;
`;
