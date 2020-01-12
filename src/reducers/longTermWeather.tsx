import typeToReducer from 'type-to-reducer';
import { 
  FETCH_LONG_TERM_WEATHER_BEGIN,
  FETCH_LONG_TERM_WEATHER_FAILURE,
  FETCH_LONG_TERM_WEATHER_SUCCESS
} from '../constants/constants';
import { AnyAction } from 'redux';
import { ILongTermWeather } from '../utils/sharedInterfaces';

interface IState {
  httpLoading: boolean,
  httpError: string,
  longTermWeather: ILongTermWeather | {}
}

const initialState: IState = {
  httpLoading: false,
  httpError: '',
  longTermWeather:  {}
}

export const longTermWeather = typeToReducer<IState, AnyAction>({
  [FETCH_LONG_TERM_WEATHER_BEGIN]: (state) => ({
    ...state,
    httpLoading: true,
    httpError: ''
  }),
  [FETCH_LONG_TERM_WEATHER_SUCCESS]: (state, action) => ({
    ...state,
    httpLoading: false,
    longTermWeather: action && action.payload
  }),
  [FETCH_LONG_TERM_WEATHER_FAILURE]: (state, action) => ({
    ...state,
    httpLoading: false,
    httpError: action && action.payload
  })
}, initialState);