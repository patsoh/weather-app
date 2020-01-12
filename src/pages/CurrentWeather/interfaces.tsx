import { IWeather } from '../../utils/sharedInterfaces';

export interface IProps {
  fetchCurrentWeather: (latitude: number, longtitude: number) => void,
  currentWeather: IWeather | {},
  httpError: string,
  httpLoading: boolean,
  clearCurrentWeather: () => void
}