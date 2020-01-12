import React from 'react';
import { 
  Wrapper,
  City,
  Date
} from './styles';
import { IProps } from './interfaces';
import { currentDate } from '../../utils/methodsHelpers';
import { WeatherValue } from './WeatherValue/WeatherValue';

export const CurrentWeatherInfo: React.SFC<IProps> = ({ 
  place,
  wind,
  temp,
  humidity,
  date
}) => {
  return (
    <Wrapper>
      <City>
        {place}
      </City>
      {date && <Date>
        {currentDate(date)}
      </Date>}
      <WeatherValue 
        value={temp}
        description='Temperature'
        unit='°C'
      />
      <WeatherValue 
        value={wind}
        description='Wind'
        unit='km/h'
      />
      <WeatherValue 
        value={humidity}
        description='Humidity'
        unit='%'
      />
    </Wrapper>
  );
}