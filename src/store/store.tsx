
import { rootReducer } from '../reducers/rootReducer';
import { 
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk)),
);

export type AppState = ReturnType<typeof rootReducer>;