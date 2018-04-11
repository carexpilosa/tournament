/* eslint-disable no-undef */

import Ranking from '../src/components/Ranking';

//testing Ranking.calculatePoints:

test('testing Ranking.calculatePoints 1', () => {
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

test('testing Ranking.calculatePoints 2', () => {
  const myResults = [
    {
      result: 1,
      round: 6,
      whiteID: 5,
      blackID: 1
    },
    {
      result: 1,
      round: 6,
      whiteID: 4,
      blackID: 2
    },
    {
      result: 0.5,
      round: 6,
      whiteID: 0,
      blackID: 3
    },
    {
      result: 0,
      round: 2,
      whiteID: 0,
      blackID: 1
    },
    {
      result: 0,
      round: 7,
      whiteID: 2,
      blackID: 5
    },
    {
      result: 1,
      round: 7,
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
      result: 0.5,
      round: 1,
      whiteID: 4,
      blackID: 0
    },
    {
      result: 1,
      round: 4,
      whiteID: 3,
      blackID: 1
    },
    {
      result: 1,
      round: 4,
      whiteID: 2,
      blackID: 0
    },
    {
      result: 1,
      round: 2,
      whiteID: 4,
      blackID: 5
    },
    {
      result: 0,
      round: 5,
      whiteID: 1,
      blackID: 4
    },
    {
      result: 1,
      round: 5,
      whiteID: 2,
      blackID: 3
    },
    {
      result: 0,
      round: 3,
      whiteID: 0,
      blackID: 5
    },
    {
      result: 0,
      round: 4,
      whiteID: 5,
      blackID: 6
    },
    {
      result: 0,
      round: 5,
      whiteID: 6,
      blackID: 0
    },
    {
      result: 0,
      round: 6,
      whiteID: 6,
      blackID: 7
    },
    {
      result: 0,
      round: 7,
      whiteID: 1,
      blackID: 6
    },
    {
      result: 1,
      round: 7,
      whiteID: 0,
      blackID: 7
    }
  ];

  const ranking = new Ranking({results: myResults});

  console.log(ranking.calculatePoints({
    name: 'Gerhard',
    id: 7
  }));
});

test('testing Ranking.calculatePoints 3', () => {
  const myResults = [
    {
      result: 0.5,
      round: 1,
      whiteID: 0,
      blackID: 1
    }
  ];
  const ranking = new Ranking({results: myResults});

  console.log(ranking.calculatePoints({
    name: 'Fred-Erich',
    id: 1
  }));

  expect(ranking.calculatePoints({
    name: 'Fred-Erich',
    id: 1
  })).toEqual({
    points: 0.5,
    numberOfGames: 1 }
  );
});
