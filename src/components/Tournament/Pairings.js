import React from 'react';

class Pairings extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const players = this.props.players;
    return (
      <div>
        <h4>Pairings</h4>
        {
          players.map((player, index) => {
            if (index % 2 ) {
              return <span>{player.name}<br/></span>;
            } else {
              return <span>{player.name} - </span>;
            }
            
          })
        }
      </div>
    );
  }
}

export default Pairings;