import React from 'react';
import { IProps } from './interfaces';
import { 
  StyledSidebar,
  Close,
  StyledLink,
  LinksWrapper
} from './styles';
import { routesConfig } from '../../utils/routesConfig';
import { IRoute } from '../../utils/sharedInterfaces';

export const Sidebar: React.SFC<IProps> = ({ 
  toggleSidebar,
  isSidebarOpen
}) => {
  return (
    <StyledSidebar
      isSidebarOpen={isSidebarOpen}
    >
      <Close
        onClick={toggleSidebar}
      />
      {routesConfig.map((route: IRoute) => (
        <LinksWrapper
          key={route.id}
        >
          <StyledLink
            to={route.routeUrl}
            onClick={toggleSidebar}
          >
            {route.routeDesc}
          </StyledLink>
        </LinksWrapper>
      ))}
    </StyledSidebar>
  );
}