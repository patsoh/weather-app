import { TOGGLE_SIDEBAR } from '../constants/constants';
import { Dispatch } from 'redux';

export const toggleSidebar = () => (dispatch: Dispatch): void => {
  dispatch({
    type: TOGGLE_SIDEBAR
  });
}