import { ILongTermWeather } from '../../../utils/sharedInterfaces';

export interface IProps {
  latitude: number,
  longtitude: number,
  localizationError: string,
  longTermWeather: ILongTermWeather,
  httpError: string
}