import { TOGGLE_SIDEBAR } from '../constants/constants';
import { AnyAction } from 'redux';
import typeToReducer from 'type-to-reducer';

interface IState {
  isSidebarOpen: boolean
}

const initialState: IState = {
  isSidebarOpen: false
}

export const sidebar = typeToReducer<IState, AnyAction>({
  [TOGGLE_SIDEBAR]: (state) => ({
    ...state,
    isSidebarOpen: !state.isSidebarOpen
  })
}, initialState);