import React from 'react';

class Pairings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const players = this.props.players;
    let pairings = new Map();
    for(let round = 1; round < players.length; round++) {
      pairings.set(round, this.props.getPairings(round));
    }

    return (
      <div>
        <h4>Pairings</h4>
        {
          Array.from(pairings).map(([round, val], index) => {
            const pairingsOfRound = val.map((pairing, idx) => {
              const { whiteID, blackID } = pairing;
              
              return <div key={idx} 
                style={{
                  display: 'flex',
                  width: '580px'
                }}>
                <div style={{
                  width: '390px',
                  display: 'flex', backgroundColor: idx % 2 ? 'white' : 'gray'
                }}>
                  <div style={{width: '170px', textAlign: 'right', marginRight: '8px'}}>
                    {players[whiteID].id + 1} {players[whiteID].name} { /*white King: */ } &#9812;
                  </div>
                  <div style={{width: '90px'}}>
                    <select name={`${round}:${whiteID}_${blackID}`} defaultValue=""
                      onChange={e => this.props.saveResult(e, round, whiteID, blackID)}
                      style={{textAlignLast: 'center'}}>
                      <option value="-1">- : -</option>
                      <option value="0">0 : 1</option>
                      <option value="0.5">1/2 : 1/2</option>  
                      <option value="1">1 : 0</option>  
                    </select>
                  </div>
                  <div style={{width: '170px'}}>
                    { /*black King: */ } &#9818; {players[blackID].id + 1} {players[blackID].name} 
                  </div>
                </div>
              </div>;
            });
            return <div key={index}>
              <hr />
              { pairingsOfRound }
            </div>;
            
          })
        }
      </div>
    );
  }
}

export default Pairings;
