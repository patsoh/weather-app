import { LocalizationInfo } from '../components/LocalizationInfo/LocalizationInfo';
import { LocalizationError } from '../components/LocalizationError/LocalizationError';
import { HttpError } from '../components/HttpError/HttpError';
import { Spinner } from '../components/Spinner/Spinner';
import React from 'react';

export const withLocalizationInfo = Component => 
({ latitude, longtitude, ...rest }) =>
  !latitude || !longtitude ?
    <LocalizationInfo />
  :
    <Component
      latitude={latitude}
      longtitude={longtitude}
      {...rest} 
    />;


export const withLocalizationError = Component =>
({ localizationError, ...rest }) => 
  localizationError ?
    <LocalizationError />
  :
    <Component
      localizationError={localizationError}
      {...rest} 
    />;

export const withError = Component =>
({ httpError, ...rest }) =>
  httpError ?
    <HttpError
      description={httpError}
    />
  :
    <Component
      httpError={httpError}
      {...rest} 
    />;


export const withLoading = Component => 
({ httpLoading, ...rest }) => 
  httpLoading ?
    <Spinner
    />
  :
    <Component
      httpLoading={httpLoading}
      {...rest}
    />;