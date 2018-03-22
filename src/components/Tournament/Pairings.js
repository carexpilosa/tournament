import React from 'react';

class Pairings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const players = this.props.players;
    let pairings = {};
    for(let round = 1; round < players.length; round++) {
      pairings[round] = this.props.getPairings(round);
    }
    console.log(pairings);

    return (
      <div>
        <h4>Pairings</h4>
        {
          Object.keys(pairings).map((round, index) => {
            let gameNr = 1;
            const pairingsOfRound = Object.keys(pairings[round]).map((whiteID, idx) => {
              let blackID = pairings[round][whiteID];
              return <div key={idx}><strong>{gameNr++}</strong>: {whiteID}. {players[whiteID].name} - {blackID}. {players[blackID].name}</div>;
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
