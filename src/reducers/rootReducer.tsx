import { combineReducers } from 'redux';
import { sidebar } from './sidebar';
import { currentWeather } from './currentWeather';
import { longTermWeather } from './longTermWeather';

export const rootReducer = combineReducers({
  sidebar,
  currentWeather,
  longTermWeather
});