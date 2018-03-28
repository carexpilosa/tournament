import { createStore, combineReducers } from 'redux';

export function playersReducer(state={}, action) {
  switch (action.type) {
    case 'UPDATE_PLAYERS':
      return [ ...state, ...action.data ];
    default: return state;
  }
}

const rootReducer = combineReducers({
  players: playersReducer
});

const initialState = {
  players: [
    {
      name: 'Horst',
      id: 1
    },
    {
      name: 'Hugo',
      id: 2
    },
    {
      name: 'Anton',
      id: 3
    },
    {
      name: 'Fred',
      id: 4
    }
  ]
};

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

