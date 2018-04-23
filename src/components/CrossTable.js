import React from 'react';

class CrossTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { players, getPointsForPlayer, floatToFraction } = this.props;
    const colNum = players.length;
    let counter = 1, rank = 1;
    const modPlayers = players.map(player => {
      const pnts = getPointsForPlayer(player.id);
      player.points = pnts;
      return player;
    }).sort(this.byPoints);

    return (
      <div>
        <div style={{display: 'grid', gridTemplateColumns: `repeat(3, max-content) repeat(${colNum}, 70px)`}}>
        <div></div>
        <div></div>
        <div></div>
          {
            modPlayers.map((player) => {
              return <div style={{textAlign: 'center'}} key={`k${counter++}`}>{player.name}</div>;
            })
          }
          {
            modPlayers
              .map((white, idx) => {
                let numOfGames = 0;
                const ret = modPlayers.map((black, index) => {
                  let resultAsWhite = '',
                    resultAsBlack = '';
                  if (white.id === black.id) {
                    return <div key={`k${counter++}`} className="dblCell" ></div>;
                  } else {
                    if (typeof this.getResult(white.id, black.id) !== 'undefined' &&
                      this.getResult(white.id, black.id) !== -1) {
                      resultAsWhite = this.getResult(white.id, black.id);
                      numOfGames++;
                    }
                    if (typeof this.getResult(black.id, white.id) !== 'undefined' &&
                      this.getResult(black.id, white.id) !== -1) {
                      resultAsBlack = 1 - this.getResult(black.id, white.id);
                      numOfGames++;
                    }
                    resultAsWhite = floatToFraction(resultAsWhite);
                    resultAsBlack = floatToFraction(resultAsBlack);
                    return (
                      <div className="dblCell" key={`k${counter++}`} >
                        <div className="whiteCell">{resultAsWhite}</div>
                        <div className="blackCell">{resultAsBlack}</div>
                      </div>
                    );
                  }
                });
                return [
                  <div style={{margin: '5px'}} key={`k${counter++}`}>{rank++}. {white.name}</div>,
                  <div style={{margin: '5px'}} key={`k${counter++}`}>{floatToFraction(white.points)}</div>,
                  <div style={{margin: '5px'}} key={`k${counter++}`}>/ {numOfGames}</div>,
                  ret
                ];
              })
            }
        </div>
      </div>
    );
  }

  byPoints(a, b) {
    return a.points < b.points ? 1 : a.points > b.points ? -1 : 0;
  }

  getResult(whiteID, blackID) {
    const resArray = this.props.results.filter(result => {
      return result.whiteID === whiteID && result.blackID === blackID;
    });
    let result = -1;
    if (resArray.length) {
      const matchingResult = resArray[resArray.length-1];
      if (matchingResult.result !== -1) {
        return result = matchingResult.result;
      }
    }
    return result;
  }
}

export default CrossTable;