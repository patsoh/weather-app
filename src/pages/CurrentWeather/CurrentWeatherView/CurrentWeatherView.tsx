import React from 'react';
import { 
  withLocalizationInfo,
  withLocalizationError,
  withError,
  withLoading
} from '../../../utils/hocs';
import { IProps } from './interfaces';
import { Wrapper } from './styles';
import { CurrentWeatherInfo } from '../../../components/CurrentWeatherInfo/CurrentWeatherInfo';

const CurrentWeatherView: React.SFC<IProps> = ({
  currentWeather
}) => {

  const { name, wind, main, dt } = currentWeather;
  return (
    <Wrapper>
      {Object.entries(currentWeather).length !== 0 && 
      <CurrentWeatherInfo
        place={name}
        wind={wind.speed}
        temp={main.temp}
        humidity={main.humidity}
        date={dt}
      />}
    </Wrapper>
  );
}

export default withLoading(withError(withLocalizationError(withLocalizationInfo(CurrentWeatherView))));