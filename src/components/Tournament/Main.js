import React from 'react';
import { connect } from 'react-redux';

import PlayerList from './PlayerList';
import Input from './Input';
import CrossTable from './CrossTable';
//import Pairings from './Pairings';

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
    console.log('insertPlayer => ' + playerName);
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
