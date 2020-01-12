import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const StyledSidebar = styled.div<{isSidebarOpen: boolean}>`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.black};
  padding: 20px;
  color: ${props => props.theme.colors.white};
  width: 230px;
  height: 100%;
  transition: all 0.25s linear;
  transform: translateX(${props => (props.isSidebarOpen ? '0' : '-100%')});
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.media.mobile}) {
    width: 100%;
  }
`;

export const Close = styled(FaTimes)`
  font-size: 20px;
  cursor: pointer;
  margin-left: auto;
`;

export const LinksWrapper = styled.nav`
  margin-top: 50px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  margin: 20px 0;
`;