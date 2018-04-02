export function updatePlayers(data) {
  return {
    type: 'UPDATE_PLAYERS',
    data
  };
}

export function deleteAllPlayers() {
  console.log('dap');
  return {
    type: 'DELETE_ALL_PLAYERS'
  };
}

export function examplePlayers() {
  console.log('----ex');
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
  console.log('dar');
  return {
    type: 'DELETE_ALL_RESULTS'
  };
}
