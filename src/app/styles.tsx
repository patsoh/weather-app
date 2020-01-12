import styled, { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const AppWrapper = styled.div`
  height: 100%;
`;

export const GlobalStyles = createGlobalStyle<{ isSidebarOpen: boolean }>`
  ${styledNormalize}

  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    height: 100%;
    overflow-y: ${props => props.isSidebarOpen && 'hidden'};

    ${props => props.isSidebarOpen &&
      `
      &:after {
        content: '';
        z-index: 10;
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
      }
      `
    } 
  }

  html {
    height: 100vh;
    overflow-y: scroll;
  }

  #root {
    height: 100%;
  }
`;