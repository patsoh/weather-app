import React from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../actions/sidebar';
import { 
  AppWrapper,
  GlobalStyles
} from './styles';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { IProps } from './interfaces';
import { AppState } from '../store/store';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { routes } from '../utils/routesConfig';
import CurrentWeather from '../pages/CurrentWeather/CurrentWeather';
import LongTermWeather from '../pages/LongTermWeather/LongTermWeather';
import SearchWeather from '../pages/SearchWeather/SearchWeather';

const App: React.SFC<IProps> = ({
  toggleSidebar,
  isSidebarOpen
}) => {

  return (
    <AppWrapper>
      <GlobalStyles
        isSidebarOpen={isSidebarOpen}
      />
      <Header
        toggleSidebar={toggleSidebar}
      />
      <Sidebar
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/search-weather' />
        </Route>
        <Route path={routes.currentWeather} component={CurrentWeather} />
        <Route path={routes.longTermWeather} component={LongTermWeather} />
        <Route path={routes.searchWeather} component={SearchWeather} />
      </Switch>
    </AppWrapper>
  );
}

const mapDispatchToProps = {
  toggleSidebar
}

const mapStateToProps = (state: AppState) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
