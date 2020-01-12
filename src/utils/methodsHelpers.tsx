import { AxiosError } from 'axios';
import { Dispatch, AnyAction } from 'redux';
import moment from 'moment';

export const handleError = (
  dispatch: Dispatch, 
  error: AxiosError, 
  errorCallback: (desc: string) => AnyAction
) => {
  if (error)  {
    if (!error.response) dispatch(errorCallback('Network Error'));
    else dispatch(errorCallback(error.response.data.message));
  }
}

export const currentDate = (date: number) => `${moment.unix(date).local().format('dddd')}, ${moment.unix(date).format('HH:mm')}`;