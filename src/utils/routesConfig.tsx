import { IRoute } from './sharedInterfaces';

export const routes = {
  currentWeather: '/current-weather',
  longTermWeather: '/long-term-weather',
  searchWeather: '/search-weather'
};

export const routesConfig: IRoute[] = [
  {
    id: 1,
    routeUrl: routes.searchWeather,
    routeDesc: 'Search for weather'
  },
  {
    id: 2,
    routeUrl: routes.currentWeather,
    routeDesc: 'Current weather'
  },
  {
    id: 3,
    routeUrl: routes.longTermWeather,
    routeDesc: 'Long-term weather'
  }
];