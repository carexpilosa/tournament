import React from 'react';

class Pairings extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const players = this.props.players;
    let pairings = {};
    for(let gameDay = 1; gameDay < players.length; gameDay++) {
      pairings[gameDay] = this.props.getPairings(gameDay);
    }

    console.log(pairings);
    
    return (
      <div>
        <h4>Pairings</h4>
        {
          players.map((player, index) => {
            if (index % 2 ) {
              return <span key={index}>{player.name}<br/></span>;
            } else {
              return <span key={index}>{player.name} - </span>;
            }
          })
        }
      </div>
    );
  }
}

export default Pairings;