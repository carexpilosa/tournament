import React from 'react';

class Pairings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const players = this.props.players;
    let pairings = new Map();
    const maxRound = players.length % 2 ? players.length : players.length -1;
    for(let round = 1; round < maxRound + 1; round++) {
      pairings.set(round, this.props.getPairings(round));
    }

    return (
      <div>
        {
          Array.from(pairings).map(([round, val], index) => {
            const pairingsOfRound = val.map((pairing, idx) => {
              const { whiteID, blackID } = pairing;
              const resultObj = this.props.getResult(whiteID, blackID);
              const result = resultObj ? resultObj.result : -1;
              return <div key={idx} className="pairingsOuterDiv">
                <div className={idx % 2 ? 'pairingsInnerDivWhite' : 'pairingsInnerDivGray'}>
                  <div className="pairingsPairingLeftDiv">
                    {players[whiteID].id + 1} {players[whiteID].name} { /* white King: */ } &#9812;
                  </div>
                  <div className="pairingsResultDiv">
                    <select name={`${round}:${whiteID}_${blackID}`} value={result}
                      onChange={e => this.props.saveResult(e, round, whiteID, blackID)}
                      className="pairingsResultSelect">
                      <option value="-1">- : -</option>
                      <option value="0">0 : 1</option>
                      <option value="0.5">1/2 : 1/2</option>
                      <option value="1">1 : 0</option>
                    </select>
                  </div>
                  <div className="pairingsPairingRightDiv">
                    { /* black King: */ } &#9818; {players[blackID].id + 1} {players[blackID].name}
                  </div>
                </div>
              </div>;
            });
            return <div key={index}>
              <hr />
              <h4>{ round }. Runde</h4>
              { pairingsOfRound }
            </div>;
          })
        }
      </div>
    );
  }
}

export default Pairings;
