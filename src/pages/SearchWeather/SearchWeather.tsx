import React, { useEffect } from 'react';
import { Wrapper } from './styles';
import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { fetchCurrentWeather, clearCurrentWeather } from '../../actions/currentWeather';
import { IProps } from './interfaces';
import { AppState } from '../../store/store';
import SearchWeatherView from './SearchWeatherView/SearchWeatherView';

const SearchWeather: React.SFC<IProps> = ({
  fetchCurrentWeather,
  currentWeather,
  httpError,
  httpLoading,
  clearCurrentWeather
}) => {

  useEffect(() => {
    return () => clearCurrentWeather();
  }, [clearCurrentWeather]);

  return (
    <Wrapper>
      <SearchBar
        fetchCurrentWeather={fetchCurrentWeather}
        clearCurrentWeather={clearCurrentWeather}
      />
      <SearchWeatherView
        currentWeather={currentWeather}
        httpError={httpError}
        httpLoading={httpLoading}
      />
    </Wrapper>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchWeather);