import React from 'react';

class Pairings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const players = this.props.players;
    let pairings = new Map();
    for(let round = 1; round < players.length; round++) {
      //console.log(round, this.props.getPairings(round));
      pairings.set(round, this.props.getPairings(round));
    }

    return (
      <div>
        <h4>Pairings</h4>
        {
          Array.from(pairings).map(([round, val], index) => {
            const pairingsOfRound = Array.from(val).map(([whiteID, blackID], idx) => {
              return <div key={idx} style={{
                display: 'flex',
                width: '520px'
              }}>
                <div style={{
                  width: '370px',
                  display: 'flex', backgroundColor: idx % 2 ? 'white' : 'gray'
                }}>
                  <div style={{width: '20px'}}>
                    <strong>{idx + 1}</strong>:
                  </div>
                  <div style={{width: '150px'}}>
                    {whiteID}. {players[whiteID].name}
                  </div>
                  <div style={{width: '90px'}}>
                    <select name={`${round}_${whiteID}_${blackID}_white`} defaultValue=""
                      style={{textAlignLast: 'center'}}>
                      <option value="empty">- : -</option>
                      <option value="0">0 : 1</option>
                      <option value="0.5">1/2 : 1/2</option>  
                      <option value="1">1 : 0</option>  
                    </select>
                  </div>
                  <div style={{width: '150px'}}>
                    {blackID}. {players[blackID].name} 
                  </div>
                </div>
              </div>;
            });
            return (<div key={index}>
              <h3>Pairings of round {round}</h3>
              <div>{pairingsOfRound}</div>
            </div>);
          })
        }
      </div>
    );
  }
}

export default Pairings;
