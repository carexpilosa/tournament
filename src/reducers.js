export function playersReducer(state=[], action) {
  switch (action.type) {
    case 'UPDATE_PLAYERS':
      return updateArrayOfObjects([...state], action.data, ['id']);
    case 'DELETE_PLAYER':
      return state.filter((player) => {
        return action.id !== player.id;
      });
    case 'EXAMPLE_PLAYERS':
      return [
        {
          'name': 'Horst-Hermann',
          'id': 0
        }, {
          'name': 'Hugo-Ewald',
          'id': 1
        }, {
          'name': 'Antonio',
          'id': 2
        }, {
          'name': 'Fred-Erich',
          'id': 3
        }, {
          'name': 'Schorse',
          'id': 4
        }, {
          'name': 'Johann',
          'id': 5
        }, {
          'name': 'Karl-Friedrich von Sum',
          'id': 6
        }, {
          'id': 7,
          'name': 'Schnacker',
        }, {
          'name': 'Waldemar',
          'id': 8
        }, {
          'name': 'Gerhard',
          'id': 9
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
          'result': 0,
          'round': 1,
          'whiteID': 5,
          'blackID': 1
        }, {
          'result': 0,
          'round': 6,
          'whiteID': 4,
          'blackID': 2
        }, {
          'result': 1,
          'round': 1,
          'whiteID': 0,
          'blackID': 3
        }, {
          'result': 0.5,
          'round': 9,
          'whiteID': 0,
          'blackID': 1
        }, {
          'result': 0,
          'round': 2,
          'whiteID': 2,
          'blackID': 5
        }, {
          'result': 1,
          'round': 2,
          'whiteID': 3,
          'blackID': 4
        }, {
          'result': 0,
          'round': 3,
          'whiteID': 1,
          'blackID': 2
        }, {
          'result': 1,
          'round': 3,
          'whiteID': 5,
          'blackID': 3
        }, {
          'result': 1,
          'round': 3,
          'whiteID': 4,
          'blackID': 0
        }, {
          'result': 0.5,
          'round': 4,
          'whiteID': 3,
          'blackID': 1
        }, {
          'result': 1,
          'round': 4,
          'whiteID': 2,
          'blackID': 0
        }, {
          'result': 0,
          'round': 4,
          'whiteID': 4,
          'blackID': 5
        }, {
          'result': 0.5,
          'round': 5,
          'whiteID': 1,
          'blackID': 4
        }, {
          'result': 1,
          'round': 5,
          'whiteID': 2,
          'blackID': 3
        }, {
          'result': 0.5,
          'round': 1,
          'whiteID': 0,
          'blackID': 5
        }, {
          'result': 0.5,
          'round': 1,
          'whiteID': 6,
          'blackID': 4
        }, {
          'result': 1,
          'round': 2,
          'whiteID': 2,
          'blackID': 7
        }, {
          'result': 0,
          'round': 1,
          'whiteID': 6,
          'blackID': 2
        }, {
          'result': 0,
          'round': 1,
          'whiteID': 7,
          'blackID': 1
        }, {
          'result': 0.5,
          'round': 2,
          'whiteID': 3,
          'blackID': 6
        }, {
          'result': 0.5,
          'round': 7,
          'whiteID': 7,
          'blackID': 8
        }, {
          'result': 0,
          'round': 7,
          'whiteID': 1,
          'blackID': 6
        }, {
          'result': 0,
          'round': 6,
          'whiteID': 8,
          'blackID': 6
        }, {
          'result': 0.5,
          'round': 5,
          'whiteID': 5,
          'blackID': 8
        }, {
          'result': 1,
          'round': 5,
          'whiteID': 6,
          'blackID': 7
        }, {
          'result': 0.5,
          'round': 4,
          'whiteID': 8,
          'blackID': 4
        }, {
          'result': 1,
          'round': 4,
          'whiteID': 7,
          'blackID': 5
        }, {
          'result': 0,
          'round': 1,
          'whiteID': 1,
          'blackID': 8
        }, {
          'result': 0.5,
          'round': 2,
          'whiteID': 8,
          'blackID': 2
        }, {
          'result': 0.5,
          'round': 2,
          'whiteID': 7,
          'blackID': 3
        }, {
          'result': 1,
          'round': 3,
          'whiteID': 3,
          'blackID': 8
        }, {
          'result': 1,
          'round': 3,
          'whiteID': 4,
          'blackID': 7
        }, {
          'result': 1,
          'round': 3,
          'whiteID': 5,
          'blackID': 6
        }, {
          'result': 0.5,
          'round': 1,
          'whiteID': 9,
          'blackID': 1
        }, {
          'result': 0,
          'round': 2,
          'whiteID': 2,
          'blackID': 9
        }, {
          'result': 1,
          'round': 3,
          'whiteID': 9,
          'blackID': 3
        }, {
          'result': 0,
          'round': 4,
          'whiteID': 4,
          'blackID': 9
        }, {
          'result': 1,
          'round': 5,
          'whiteID': 9,
          'blackID': 5
        }, {
          'result': 0,
          'round': 6,
          'whiteID': 6,
          'blackID': 9
        }, {
          'result': 1,
          'round': 7,
          'whiteID': 9,
          'blackID': 7
        }, {
          'result': 0.5,
          'round': 8,
          'whiteID': 8,
          'blackID': 9
        }, {
          'result': 1,
          'round': 9,
          'whiteID': 0,
          'blackID': 9
        }
      ];
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
