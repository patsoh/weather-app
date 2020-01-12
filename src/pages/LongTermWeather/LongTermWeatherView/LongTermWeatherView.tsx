import React from 'react';
import { 
  withLocalizationInfo,
  withLocalizationError,
  withError,
  withLoading
} from '../../../utils/hocs';
import { IProps } from './interfaces';
import { Wrapper, Place } from './styles';
import { LongTermWeatherList } from '../../../components/LongTermWeatherList/LongTermWeatherList';

const LongTermWeatherView: React.SFC<IProps> = ({ 
  longTermWeather
}) => {
   const { city, list } = longTermWeather;
  return(
    <Wrapper>
      {Object.entries(longTermWeather).length !== 0 &&
      <>
        <Place>
          {city.name}
        </Place>
        <LongTermWeatherList
          weatherList={list}
        />
      </>}
    </Wrapper>
  );
}

export default withLoading(withError(withLocalizationError(withLocalizationInfo(LongTermWeatherView))));