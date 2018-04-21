import * as data from './exampleData';

export function playersReducer(state=[], action) {
  switch (action.type) {
    case 'UPDATE_PLAYERS':
      return updateArrayOfObjects([...state], action.data, ['id']);
    case 'DELETE_PLAYER':
      return state.filter((player) => {
        return action.id !== player.id;
      });
    case 'EXAMPLE_PLAYERS':
      return data.examplePlayers;
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
      return data.exampleResults;
    case 'DELETE_ALL_RESULTS':
      return [];
    default: return state;
  }
}

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
