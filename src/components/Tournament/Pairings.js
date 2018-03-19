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
        {
          Object.keys(pairings).map((gameday, idx) => {
            const renderData = Object.keys(pairings[gameday]).map((whiteID, idx) => {
              return <span key={idx}>{whiteID} - {pairings[gameday][whiteID]}<br/></span>;
            });
            return <span key={idx}>{`${gameday}. Spieltag: `}<br/>{renderData}<br/></span>;
          })
        }
      </div>
    );
  }
}

export default Pairings;
