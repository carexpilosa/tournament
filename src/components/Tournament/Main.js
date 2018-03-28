import React from 'react';
import { connect } from 'react-redux';

import PlayerList from './PlayerList';
import Input from './Input';
import CrossTable from './CrossTable';
import Pairings from './Pairings';
import { updatePlayers } from '../../actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }

  render() {
    const players = this.props.players;
    return (
      <div>
        <h3>Tournament</h3>
        <PlayerList players={players} />
        <CrossTable players={players} />
        <Input insertPlayer={this.insertPlayer.bind(this)} />
        <Pairings players={this.props.players} getPairings={this.getPairings.bind(this)} />
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

  getOpponentId(numberOfPlayers, roundNumber, playerID) {
    let opponentId;
    const maxRoundNumber = numberOfPlayers - 1;
    for (let i = 1; i < numberOfPlayers; i++) {
      const sumOpponents = playerID + i,
        divisionRest = sumOpponents % maxRoundNumber;
      if (i !== playerID &&
        (
          divisionRest === roundNumber ||
          roundNumber === maxRoundNumber && divisionRest === 0
        )
      ) {
        opponentId = i;
        break;
      }
    }
    return opponentId || 0; //opponentId is never 0
  }

  getPairings(roundNumber) {
    const players = this.props.players;
    const numberOfPlayers = players.length;
    const pairings = [];
    players.forEach((player, idx) => {
      if(idx === 0) return;
      const opponentNumber = this.getOpponentId(numberOfPlayers, roundNumber, idx);
      const [whiteID, blackID] = this.getPairing(idx, opponentNumber);
      let pObj = {
        roundNumber,
        whiteID,
        blackID,
        result: -1
      };
      pairings.push(pObj);
    });
    return pairings;
  }

  getPairing(playerNumber1, playerNumber2, isBackRound) {
    let ret;
    const [highNumber, lowNumber] =
      playerNumber1 > playerNumber2 ? [playerNumber1, playerNumber2] :
        [playerNumber2, playerNumber1];
    if (isBackRound) {
      ret = (playerNumber1 + playerNumber2) % 2 ? [highNumber, lowNumber] :
        [lowNumber, highNumber];
    } else {
      ret = (playerNumber1 + playerNumber2) % 2 ? [lowNumber, highNumber] :
        [highNumber, lowNumber];
    }
    return ret;
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
