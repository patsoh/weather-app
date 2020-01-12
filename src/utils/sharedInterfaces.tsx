export interface IRoute {
  id: number,
  routeUrl: string,
  routeDesc: string
}

export interface IWeatherValues {
  wind: {
    speed: number
  },
  main: {
    humidity: number,
    temp: number
  },
  dt: number,
  dt_txt: string
}

export interface IWeather extends IWeatherValues {
  name: string
}

export interface ILongTermWeather {
  city: {
    name: string
  },
  list: IWeatherValues[]
}