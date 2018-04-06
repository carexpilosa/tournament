/* eslint-disable no-undef */

import Ranking from '../src/components/Ranking';

//testing Ranking.calculatePoints:

test('testing Ranking.calculatePoints', () => {
  const myResults =
    [
      {
        'result': 0,
        'round': 1,
        'whiteID': 3,
        'blackID': 1
      },
      {
        'result': 1,
        'round': 1,
        'whiteID': 2,
        'blackID': 0
      },
      {
        'result': 0,
        'round': 2,
        'whiteID': 0,
        'blackID': 1
      },
      {
        'result': 1,
        'round': 2,
        'whiteID': 2,
        'blackID': 3
      },
      {
        'result': -1,
        'round': 3,
        'whiteID': 1,
        'blackID': 2
      }
    ];

  const ranking = new Ranking({results: myResults});

  expect(ranking.calculatePoints({
    name: 'Horst-Hermann',
    id: 0
  })).toEqual({
    points: 0,
    numberOfGames: 2 }
  );

  expect(ranking.calculatePoints({
    name: 'Hugo-Ewald',
    id: 1
  })).toEqual({
    points: 2,
    numberOfGames: 2 }
  );

  expect(ranking.calculatePoints({
    name: 'Antonio',
    id: 2}
  )).toEqual({
    points: 2,
    numberOfGames: 2 }
  );

  expect(ranking.calculatePoints({
    name: 'Fred-Erich',
    id: 3
  })).toEqual({
    points: 0,
    numberOfGames: 2 }
  );
});