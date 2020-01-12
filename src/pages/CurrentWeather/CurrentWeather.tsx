import React, { useEffect } from 'react';
// @ts-ignore
import { usePosition } from 'use-position';
import { fetchCurrentWeather, clearCurrentWeather } from '../../actions/currentWeather';
import { connect } from 'react-redux';
import { IProps } from './interfaces';
import { AppState } from '../../store/store';
import CurrentWeatherView from './CurrentWeatherView/CurrentWeatherView';

const CurrentWeather: React.SFC<IProps> = ({
  fetchCurrentWeather,
  currentWeather,
  httpError,
  httpLoading,
  clearCurrentWeather
}) => {
  const { latitude, longitude, error } = usePosition();

  useEffect(() => {
    latitude && longitude && fetchCurrentWeather(latitude, longitude);
  }, [latitude, longitude, fetchCurrentWeather]);

  useEffect(() => {
    return () => clearCurrentWeather();
  }, [clearCurrentWeather]);

  return (
    <CurrentWeatherView
      latitude={latitude}
      longtitude={longitude}
      localizationError={error}
      currentWeather={currentWeather}
      httpError={httpError}
      httpLoading={httpLoading}
    />
  )
}

const mapStateToProps = (state: AppState) => ({
  currentWeather: state.currentWeather.currentWeather,
  httpError: state.currentWeather.httpError,
  httpLoading: state.currentWeather.httpLoading
});

const mapDispatchToProps = {
  fetchCurrentWeather,
  clearCurrentWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);