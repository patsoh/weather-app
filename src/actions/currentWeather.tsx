import { 
  FETCH_CURRENT_WEATHER_BEGIN,
  FETCH_CURRENT_WEATHER_FAILURE,
  FETCH_CURRENT_WEATHER_SUCCESS,
  CLEAR_CURRENT_WEATHER,
  OPEN_WEATHER_URL,
  OPEN_WEATHER_KEY
} from '../constants/constants';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../store/store';
import { handleError } from '../utils/methodsHelpers';
import { Dispatch } from 'redux';
import { IWeather } from '../utils/sharedInterfaces';
import axios from 'axios';
import to from 'await-to-js';

interface IFetchCurrentWeatherBeginAction {
  type: typeof FETCH_CURRENT_WEATHER_BEGIN
}

interface IFetchCurrentWeatherSuccessAction {
  type: typeof FETCH_CURRENT_WEATHER_SUCCESS,
  payload: IWeather
}

interface IFetchCurrentWeatherFailureAction {
  type: typeof FETCH_CURRENT_WEATHER_FAILURE,
  payload: string
}

interface IClearCurrentWeatherAction {
  type: typeof CLEAR_CURRENT_WEATHER
}

type CurrentWeatherTypes = 
  IFetchCurrentWeatherBeginAction   |
  IFetchCurrentWeatherSuccessAction |
  IFetchCurrentWeatherFailureAction |
  IClearCurrentWeatherAction;

export const fetchCurrentWeather = (
  latitude: number | null, 
  longtitude: number | null,
  searchByCity?: string
): ThunkAction<void, AppState, null, CurrentWeatherTypes> => {
  const URL = searchByCity ?
    `${OPEN_WEATHER_URL}/weather?q=${searchByCity}&units=metric&APPID=${OPEN_WEATHER_KEY}`
    :
    `${OPEN_WEATHER_URL}/weather?lat=${latitude}&lon=${longtitude}&units=metric&APPID=${OPEN_WEATHER_KEY}`
  return async (dispatch: Dispatch) => {
    dispatch(fetchCurrentWeatherBegin())
    const [error, response] = await to(axios.get(URL));
    response && response.data && dispatch(fetchCurrentWeatherSuccess(response.data));
    error && handleError(dispatch, error, fetchCurrentWeatherFailure);
  }
}

const fetchCurrentWeatherBegin = (): CurrentWeatherTypes => ({
  type: FETCH_CURRENT_WEATHER_BEGIN
});

const fetchCurrentWeatherSuccess = (weather: IWeather): CurrentWeatherTypes => ({
  type: FETCH_CURRENT_WEATHER_SUCCESS,
  payload: weather
});

const fetchCurrentWeatherFailure = (error: string): CurrentWeatherTypes => ({
  type: FETCH_CURRENT_WEATHER_FAILURE,
  payload: error
});

export const clearCurrentWeather = () => (dispatch: Dispatch) => {
  dispatch({
    type: CLEAR_CURRENT_WEATHER
  });
}