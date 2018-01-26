import { createStore, combineReducers } from 'redux';
import { dataReducer } from './reducers';

const initialState = {
  data: {4711: {la: 'bomba'}}
};

const rootReducer = combineReducers({
  data: dataReducer,
  initialState
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

