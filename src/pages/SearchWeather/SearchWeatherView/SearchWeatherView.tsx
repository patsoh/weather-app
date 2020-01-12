import React from 'react';
import { CurrentWeatherInfo } from '../../../components/CurrentWeatherInfo/CurrentWeatherInfo';
import { IProps } from './interfaces';
import { Wrapper } from './styles';
import { withError, withLoading } from '../../../utils/hocs';

const SearchWeatherView: React.SFC<IProps> = ({ 
  currentWeather
}) => {
  const { name, wind, main } = currentWeather;
  return (
    <Wrapper>
      {Object.entries(currentWeather).length !== 0 && 
      <CurrentWeatherInfo
        place={name}
        wind={wind.speed}
        temp={main.temp}
        humidity={main.humidity}
      />}
    </Wrapper>
  );
}

export default withLoading(withError(SearchWeatherView));