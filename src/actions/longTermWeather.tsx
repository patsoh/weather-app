import { 
  FETCH_LONG_TERM_WEATHER_BEGIN,
  FETCH_LONG_TERM_WEATHER_FAILURE,
  FETCH_LONG_TERM_WEATHER_SUCCESS,
  OPEN_WEATHER_URL,
  OPEN_WEATHER_KEY
} from '../constants/constants';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../store/store';
import { handleError } from '../utils/methodsHelpers';
import { Dispatch } from 'redux';
import { ILongTermWeather } from '../utils/sharedInterfaces';
import axios from 'axios';
import to from 'await-to-js';

interface IFetchLongTermWeatherBeginAction {
  type: typeof FETCH_LONG_TERM_WEATHER_BEGIN
}

interface IFetchLongTermWeatherSuccessAction {
  type: typeof FETCH_LONG_TERM_WEATHER_SUCCESS,
  payload: ILongTermWeather
}

interface IFetchLongTermWeatherFailureAction {
  type: typeof FETCH_LONG_TERM_WEATHER_FAILURE,
  payload: string
}

type LongTermWeatherTypes = 
  IFetchLongTermWeatherBeginAction   |
  IFetchLongTermWeatherSuccessAction |
  IFetchLongTermWeatherFailureAction;

export const fetchLongTermWeather = (
  latitude: number, 
  longtitude: number
): ThunkAction<void, AppState, null, LongTermWeatherTypes> => {
  const URL = `${OPEN_WEATHER_URL}/forecast?lat=${latitude}&lon=${longtitude}&units=metric&APPID=${OPEN_WEATHER_KEY}`
  return async (dispatch: Dispatch) => {
    dispatch(fetchLongTermtWeatherBegin())
    const [error, response] = await to(axios.get(URL));
    response && response.data && dispatch(fetchLongTermWeatherSuccess(response.data));
    error && handleError(dispatch, error, fetchLongTermWeatherFailure);
  }
}

const fetchLongTermtWeatherBegin = (): LongTermWeatherTypes => ({
  type: FETCH_LONG_TERM_WEATHER_BEGIN
});

const fetchLongTermWeatherSuccess = (weather: ILongTermWeather): LongTermWeatherTypes => ({
  type: FETCH_LONG_TERM_WEATHER_SUCCESS,
  payload: weather
});

const fetchLongTermWeatherFailure = (error: string): LongTermWeatherTypes => ({
  type: FETCH_LONG_TERM_WEATHER_FAILURE,
  payload: error
});