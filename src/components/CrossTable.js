import React from 'react';

class CrossTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { players, getPointsForPlayer, floatToFraction } = this.props;
    const colNum = players.length;
    let counter = 1;
    const modPlayers = players.map(player => {
      const pnts = getPointsForPlayer(player.id);
      player.points = pnts;
      return player;
    }).sort(this.byPoints);

    return (
      <div>
        <h4>Cross Table</h4>
        <div style={{display: 'grid', gridTemplateColumns: `max-content repeat(${colNum}, 70px) max-content`}}>
        <div></div>
          {
            modPlayers.map((player) => {
              return <div style={{textAlign: 'center'}} key={`k${counter++}`}>{player.name}</div>;
            })
          }
        <div></div>
          {
            modPlayers
              .map((white, idx) => {
                const ret = modPlayers.map((black, index) => {
                  let resultAsWhite = '',
                    resultAsBlack = '';
                  if (white.id === black.id) {
                    return <div className="dblCell" ></div>;
                  } else {
                    resultAsWhite = this.getResult(white.id, black.id) !== -1
                      ? this.getResult(white.id, black.id) : '';
                    resultAsBlack = this.getResult(black.id, white.id) !== -1
                      ? 1 - this.getResult(black.id, white.id) : '';
                    resultAsWhite = floatToFraction(resultAsWhite);
                    resultAsBlack = floatToFraction(resultAsBlack);
                    return (
                      <div className="dblCell" key={counter++}>
                        <div className="whiteCell">{resultAsWhite}</div>
                        <div className="blackCell">{resultAsBlack}</div>
                      </div>
                    );
                  }
                });
                return [
                  <div style={{margin: '5px'}} key={`k${counter++}`}>{white.name}</div>,
                  ret,
                  <div style={{margin: '5px'}} key={`k${counter++}`}>{floatToFraction(white.points)}</div>
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