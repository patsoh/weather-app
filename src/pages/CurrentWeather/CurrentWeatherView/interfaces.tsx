import { IWeather } from '../../../utils/sharedInterfaces';

export interface IProps {
  latitude: number,
  longtitude: number,
  localizationError: string,
  currentWeather: IWeather,
  httpError: string,
  httpLoading: boolean
}