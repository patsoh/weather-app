import typeToReducer from 'type-to-reducer';
import { 
  FETCH_CURRENT_WEATHER_BEGIN,
  FETCH_CURRENT_WEATHER_FAILURE,
  FETCH_CURRENT_WEATHER_SUCCESS,
  CLEAR_CURRENT_WEATHER
} from '../constants/constants';
import { AnyAction } from 'redux';
import { IWeather } from '../utils/sharedInterfaces';

interface IState {
  httpLoading: boolean,
  httpError: string,
  currentWeather: IWeather | {}
}

const initialState: IState = {
  httpLoading: false,
  httpError: '',
  currentWeather: {}
}

export const currentWeather = typeToReducer<IState, AnyAction>({
  [FETCH_CURRENT_WEATHER_BEGIN]: (state) => ({
    ...state,
    httpLoading: true,
    httpError: ''
  }),
  [FETCH_CURRENT_WEATHER_SUCCESS]: (state, action) => ({
    ...state,
    httpLoading: false,
    currentWeather: action && action.payload
  }),
  [FETCH_CURRENT_WEATHER_FAILURE]: (state, action) => ({
    ...state,
    httpLoading: false,
    httpError: action && action.payload
  }),
  [CLEAR_CURRENT_WEATHER]: (state) => ({
    ...state,
    currentWeather: {},
    error: ''
  })
}, initialState);