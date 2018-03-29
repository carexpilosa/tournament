import { createStore, combineReducers } from 'redux';

export function playersReducer(state={}, action) {
  switch (action.type) {
    case 'UPDATE_PLAYERS':
      return [ ...state, ...action.data ];
    default: return state;
  }
}

export function resultsReducer(state={}, action) {
  switch (action.type) {
    case 'UPDATE_RESULTS':
      return [ ...state, ...action.data ];
    default: return state;
  }
}

const rootReducer = combineReducers({
  players: playersReducer,
  results: resultsReducer
});

const initialState = {
  players: [
    {
      name: 'Horst',
      id: 0
    },
    {
      name: 'Hugo',
      id: 1
    },
    {
      name: 'Anton',
      id: 2
    },
    {
      name: 'Fred',
      id: 3
    }
  ],
  results: []
};

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

