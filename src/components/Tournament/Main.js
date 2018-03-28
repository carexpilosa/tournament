import React from 'react';
import { connect } from 'react-redux';

import PlayerList from './PlayerList';
import Input from './Input';
import CrossTable from './CrossTable';
//import Pairings from './Pairings';
import { updatePlayers } from '../../actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }

  render() {
    const players = this.props.players;
    console.log(players);
    return (
      <div>
        <h3>Tournament</h3>
        <PlayerList players={players} />
        <CrossTable players={players} />
        <Input insertPlayer={this.insertPlayer.bind(this)} />
      </div>
    );
  }

  insertPlayer(playerName) {
    this.props.updatePlayers([{
      name: playerName,
      id: this.getHighestPlayerId() + 1
    }]);
  }

  getHighestPlayerId() {
    const highestId = this.props.players.reduce((zwischenergebnis, player) => {
      return player.id > zwischenergebnis ? player.id : zwischenergebnis;
    }, 0);
    return highestId;
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayers: (data) => dispatch(updatePlayers(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
