import React from 'react';

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const players = this.props.players;
    return (
      <div>
        <h4>List Of Players</h4>
        <ul>
        {
          //players.map((sp, idx) => <li key={idx}>{idx} {sp.name}</li>)
        }
        </ul>
      </div>
    );
  }
}

export default PlayerList;