export function updatePlayers(data) {
  return {
    type: 'UPDATE_PLAYERS',
    data
  };
}

export function deleteAllPlayers() {
  return {
    type: 'DELETE_ALL_PLAYERS'
  };
}

export function examplePlayers() {
  return {
    type: 'EXAMPLE_PLAYERS'
  };
}

export function updateResults(data) {
  return {
    type: 'ADD_ONE_RESULT',
    data
  };
}

export function deleteAllResults() {
  return {
    type: 'DELETE_ALL_RESULTS'
  };
}
