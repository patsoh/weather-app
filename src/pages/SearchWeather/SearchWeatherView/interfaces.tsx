import { IWeather } from '../../../utils/sharedInterfaces';

export interface IProps {
  currentWeather: IWeather,
  httpError: string,
  httpLoading: boolean
}