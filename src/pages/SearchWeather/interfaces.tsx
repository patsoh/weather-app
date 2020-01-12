import { IWeather } from '../../utils/sharedInterfaces';

export interface IProps {
  fetchCurrentWeather: (latitude: number | null, longtitude: number | null, searchByCity?: string) => void,
  currentWeather: IWeather | {},
  httpError: string,
  httpLoading: boolean,
  clearCurrentWeather: () => void
}