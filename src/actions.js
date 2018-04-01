export function updatePlayers(data) {
  return {
    type: 'UPDATE_PLAYERS',
    data
  };
}

export function updateResults(data) {
  return {
    type: 'ADD_ONE_RESULT',
    data
  };
}
