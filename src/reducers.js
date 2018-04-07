import { createStore, combineReducers } from 'redux';
// import { removeAllListeners } from 'cluster';

export function playersReducer(state=[], action) {
  switch (action.type) {
    case 'UPDATE_PLAYERS':
      return updateArrayOfObjects([...state], action.data, ['id']);
    case 'DELETE_PLAYER':
      console.log('delete', action.id);
      return state.filter((player) => {
        return action.id !== player.id;
      });
    case 'EXAMPLE_PLAYERS':
      return [
        {
          name: 'Horst-Hermann',
          id: 0
        },
        {
          name: 'Hugo-Ewald',
          id: 1
        },
        {
          name: 'Antonio',
          id: 2
        },
        {
          name: 'Fred-Erich',
          id: 3
        },
        {
          name: 'Schorse',
          id: 4
        },
        {
          name: 'Johann',
          id: 5
        }
      ];
    case 'DELETE_ALL_PLAYERS':
      return [];
    default: return state;
  }
}

export function resultsReducer(state=[], action) {
  switch (action.type) {
    case 'ADD_ONE_RESULT':
      return updateArrayOfObjects([...state], action.data, ['whiteID', 'blackID']);
    case 'EXAMPLE_RESULTS':
      return [
        {
          result: 0,
          round: 1,
          whiteID: 5,
          blackID: 1
        },
        {
          result: 0.5,
          round: 1,
          whiteID: 4,
          blackID: 2
        },
        {
          result: 0,
          round: 1,
          whiteID: 0,
          blackID: 3
        },
        {
          result: 0.5,
          round: 2,
          whiteID: 0,
          blackID: 1
        },
        {
          result: 0,
          round: 2,
          whiteID: 2,
          blackID: 5
        },
        {
          result: 1,
          round: 2,
          whiteID: 3,
          blackID: 4
        },
        {
          result: 0,
          round: 3,
          whiteID: 1,
          blackID: 2
        },
        {
          result: 1,
          round: 3,
          whiteID: 5,
          blackID: 3
        },
        {
          result: 0,
          round: 3,
          whiteID: 4,
          blackID: 0
        },
        {
          result: 0.5,
          round: 4,
          whiteID: 3,
          blackID: 1
        },
        {
          result: 0,
          round: 4,
          whiteID: 2,
          blackID: 0
        },
        {
          result: 0,
          round: 4,
          whiteID: 4,
          blackID: 5
        },
        {
          result: 0.5,
          round: 5,
          whiteID: 1,
          blackID: 4
        },
        {
          result: 0,
          round: 5,
          whiteID: 2,
          blackID: 3
        },
        {
          result: 0,
          round: 5,
          whiteID: 0,
          blackID: 5
        }
      ];
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
