import { ILongTermWeather } from '../../utils/sharedInterfaces';

export interface IProps {
  fetchLongTermWeather: (latitude: number, longtitude: number) => void,
  longTermWeather: ILongTermWeather | {},
  httpError: string,
  httpLoading: boolean
}