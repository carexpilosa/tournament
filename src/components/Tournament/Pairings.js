import React from 'react';

class Pairings extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const players = this.props.players;
    console.log(players);
    let pairings = {};
    for(let gameDay = 1; gameDay < players.length; gameDay++) {
      pairings[gameDay] = this.props.getPairings(gameDay);
    }

    return (
      <div>
        <h4>Pairings</h4>
        {
          Object.keys(pairings).map((gameday, idx) => {
            const pairingsOfGameDay = Object.keys(pairings[gameday]).map((whiteID, idx) => {
              return (
                <span key={idx}>
                  <span style={{
                    textAlign: 'right',
                    display: 'block',
                    float: 'left',
                    width: '150px'
                  }}>{players[whiteID-1].name}</span>
                  <span> - </span>
                  <span style={{
                    textAlign: 'left',
                    backgroundColor: '#DDDDDD'
                  }}>{players[pairings[gameday][whiteID]-1].name}<br/></span>
                </span>
              );
            });
            return (
              <span key={idx}>
                {gameday}. Spieltag: <br/>{pairingsOfGameDay}<br/>
              </span>
            );
          })
        }
      </div>
    );
  }
}

export default Pairings;
