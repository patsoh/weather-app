export interface IProps {
  fetchCurrentWeather: (latitude: number | null, longtitude: number | null, searchByCity?: string) => void,
  clearCurrentWeather: () => void
}