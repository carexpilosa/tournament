import React from 'react';

class CrossTable extends React.Component {
  constructor(props) {
    super(props);
  }

  _render() {
    const { players } = this.props;
    return (
      <div>
        <h4>Cross Table</h4>
        <table id="crossTable">
          <tbody>
          <tr><td></td>
        {
          players.map((sp, idx) => {
            return <td className="crossTableThTop" key={idx}>
              {sp.id + 1} {sp.name && sp.name.length > 4
                ? `${sp.name.substr(0,3)}...` : sp.name}
            </td>;
          })
        }
        </tr>
        {
          players.map((sp, idx) => {
            return <tr key={`${idx}-1`}>
              <td className="crossTableThLeft">{idx + 1} {sp.name}</td>
            {
              players.map((sp, index) => {
                const result = this.getResult(idx, index).toString();
                const [resWhite, resBlack] =
                  result === '0' ? ['0', '1'] :
                    result === '0.5' ? ['0.5', '0.5'] :
                      result === '1' ? ['1', '0'] : ['-', '-'];

                return (
                  <td style={{border: '2px solid black', textAlign: 'center'}}
                    key={`${idx}-${index}`}>{idx === index ? 'X' : `${resWhite} : ${resBlack}`}</td>
                );
              })
            }
            </tr>;
          })
        }
        </tbody>
        </table>
      </div>
    );
  }

  __render() {
    const { players } = this.props;
    const colNum = players.length;
    let counter = 1;
    return (
      <div>
        <h4>Cross Table</h4>
        <div style={{display: 'grid', gridTemplateColumns: `max-content repeat(${colNum}, 70px)`}}>
          {
            players.map((white, idx) => {
              const ret = players.map((black, index) => {
                const resultAsWhite = this.getResult(white.id, black.id) !== -1
                  ? this.getResult(white.id, black.id) : '';
                const resultAsBlack = this.getResult(black.id, white.id) !== -1
                  ? 1 - this.getResult(black.id, white.id) : '';
                return (
                  <div className="dblCell" key={counter++}>
                    <div className="whiteCell">{resultAsWhite}</div>
                    <div className="blackCell">{resultAsBlack}</div>
                  </div>
                );
              });
              return [<div key={`k${counter++}`}>{white.name}</div>, ret];
            })
          }
        </div>
      </div>
    );
  }

  render() {
    const { players } = this.props;
    const colNum = players.length;
    let counter = 1;
    const modPlayers = players.map(player => {
      const pnts = this.props.getPointsForPlayer(player.id);
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
                    if (resultAsWhite === 0.5) {
                      resultAsWhite = '½';
                    }
                    if (resultAsBlack === 0.5) {
                      resultAsBlack = '½';
                    }
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
                  <div style={{margin: '5px'}} key={`k${counter++}`}>{white.points}</div>
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