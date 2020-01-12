import React from 'react';
import {
  Wrapper,
  List,
  ListItem,
  Label,
  Value,
  ValueWrapper,
  Date
} from './styles';
import { IProps } from './interfaces';
import { IWeatherValues } from '../../utils/sharedInterfaces';

export const LongTermWeatherList: React.SFC<IProps> = ({
  weatherList
}) => {
  return (
    <Wrapper>
      <List>
        {weatherList && weatherList.map((weather: IWeatherValues) => (
          <ListItem
            key={weather.dt}
          >
            <Date>
              {weather.dt_txt}
            </Date>
            <ValueWrapper>
              <Label>
                Temperature
              </Label>
              <Value>
                {weather.main.temp} °C
              </Value>
            </ValueWrapper>
            <ValueWrapper>
              <Label>
                Wind
              </Label>
              <Value>
                {weather.wind.speed} km/h
              </Value>
            </ValueWrapper>
            <ValueWrapper>
              <Label>
                Humidity
              </Label>
              <Value>
                {weather.main.humidity} %
              </Value>
            </ValueWrapper>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}