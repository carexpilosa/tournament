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

export function deletePlayer(id) {
  return {
    type: 'DELETE_PLAYER',
    id
  };
}

export function examplePlayers() {
  return {
    type: 'EXAMPLE_PLAYERS'
  };
}

export function exampleResults() {
  return {
    type: 'EXAMPLE_RESULTS'
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
