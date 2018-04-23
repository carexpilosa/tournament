/* eslint-disable no-undef */

import Ranking from '../src/components/Ranking';

let state = 
{
  players: [
    {
      name: 'A',
      id: 1
    },
    {
      name: 'B',
      id: 2
    }
  ],
  results: [
    {
      result: 0.5,
      round: 1,
      whiteID: 0,
      blackID: 1
    }
  ],
  _persist: {
    version: -1,
    rehydrated: true
  }
};

let props = {
  results: [
    {
      result: 0.5,
      round: 1,
      whiteID: 0,
      blackID: 1
    }
  ]
};

let ranking = new Ranking(props);

ranking.calculatePoints({
  name: 'B',
  id: 2
});

test('testing Ranking.calculatePoints 2', () => {
  expect(ranking.calculatePoints({
    name: 'A',
    id: 2
  })).toEqual({
    points: 0.5,
    numberOfGames: 1 }
  );
});