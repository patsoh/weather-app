import React, { useEffect } from 'react';
import { fetchLongTermWeather } from '../../actions/longTermWeather';
import { connect } from 'react-redux';
// @ts-ignore
import { usePosition } from 'use-position';
import { IProps } from './interfaces';
import { AppState } from '../../store/store';
import LongTermWeatherView from './LongTermWeatherView/LongTermWeatherView';

const LongTermWeather: React.SFC<IProps> = ({
  fetchLongTermWeather,
  longTermWeather,
  httpError,
  httpLoading
}) => {
  const { latitude, longitude, error } = usePosition();

  useEffect(() => {
    latitude && longitude && fetchLongTermWeather(latitude, longitude);
  }, [latitude, longitude, fetchLongTermWeather]);
  
  return (
    <LongTermWeatherView
      latitude={latitude}
      longtitude={longitude}
      localizationError={error}
      longTermWeather={longTermWeather}
      httpError={httpError}
      httpLoading={httpLoading}
    />
  );
}

const mapStateToProps = (state: AppState) => ({
  longTermWeather: state.longTermWeather.longTermWeather,
  httpError: state.longTermWeather.httpError,
  httpLoading: state.longTermWeather.httpLoading
});

const mapDispatchToProps = {
  fetchLongTermWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(LongTermWeather);