import { createStore, combineReducers } from 'redux';
// import { removeAllListeners } from 'cluster';

export function playersReducer(state=[], action) {
  switch (action.type) {
    case 'UPDATE_PLAYERS':
      return updateArrayOfObjects([...state], action.data, ['id']);
    case 'EXAMPLE_PLAYERS':
      return [
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
      ];
    case 'DELETE_ALL_PLAYERS':
      return [];
    default: return state;
  }
}

export function resultsReducer(state=[], action) {
  let newState = [...state],
    replaced;
  switch (action.type) {
    case 'ADD_ONE_RESULT':
      replaced = false;
      newState.forEach((res, idx) => {
        if (parseInt(res.whiteID) === parseInt(action.data.whiteID) &&
            parseInt(res.blackID) === parseInt(action.data.blackID)) {
          newState[idx] = action.data;
          replaced = true;
        }
      });
      if (!replaced) {
        newState.push(action.data);
      }
      return [ ...newState ];
    case 'DELETE_ALL_RESULTS':
      return [];
    default: return state;
  }
}

const rootReducer = combineReducers({
  players: playersReducer,
  results: resultsReducer
});

const initialState = {
  players: [],
  results: []
};

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const updateArrayOfObjects = (array, newOrChangedObject, keysToCheck) => {
  let replaced = false;
  console.log(newOrChangedObject);
  array.forEach((res, idx) => {
    let allKeysEqual = true;
    keysToCheck.forEach(key => {
      if (res[key] !== newOrChangedObject[key]) {
        allKeysEqual = false;
      }
    });
    if (allKeysEqual) {
      array[idx] = newOrChangedObject;
      replaced = true;
    }
  });
  if (!replaced) {
    array.push(newOrChangedObject);
  }
  return array;
};
