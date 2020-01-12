import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </ReduxProvider>,
document.getElementById('root'));

serviceWorker.unregister();
