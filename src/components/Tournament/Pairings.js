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
              return <div key={idx}><strong>{idx + 1}</strong>: {whiteID}. {players[whiteID].name} - {blackID}. {players[blackID].name}</div>;
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
