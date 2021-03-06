import React from 'react';
import { connect } from 'react-redux';

import Download from './Download';
import PlayerList from './PlayerList';
import Input from './Input';
import CrossTable from './CrossTable';
import Pairings from './Pairings';
import ShowHide from './ShowHide';

//import Ranking from './Ranking';
import {
  updatePlayers,
  deleteAllPlayers,
  deletePlayer,
  examplePlayers,
  exampleResults,
  updateResults,
  deleteAllResults
} from '../actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { players, results} = this.props;
    return (
      <div>
        <h3>Turnier</h3>
        <ShowHide title="Buttons">
          <Download players={players} results={results}/>
          <button onClick={() => this.cleanPlayers()}>reset</button><br/>
          <button onClick={() => this.example()}>reset to example players</button><br/>
          <button onClick={() => this.exampleResults()}>set example results</button><br/>
        </ShowHide>
        <ShowHide title="Teilnehmerliste">
          <PlayerList component={PlayerList} players={players} updatePlayers={this.props.updatePlayers}
          getPlayerById={this.getPlayerById.bind(this)} deletePlayer={this.props.deletePlayer.bind(this)} />
          <Input insertPlayer={this.insertPlayer.bind(this)} />
        </ShowHide>
        <ShowHide title="Kreuztabelle">
          <CrossTable players={players} results={results}
            getPointsForPlayer={this.getPointsForPlayer.bind(this)}
            floatToFraction={this.floatToFraction} />
          </ShowHide>
          <ShowHide title="Paarungen">
          <Pairings players={this.props.players} getPairings={this.getPairings.bind(this)}
            saveResult={this.saveResult.bind(this)} getResult={this.getResult.bind(this)} />
        </ShowHide>
      </div>
    );
  }

  exampleResults() {
    this.props.exampleResults();
  }

  cleanPlayers() {
    this.props.deleteAllPlayers();
    this.props.deleteAllResults();
  }

  example() {
    this.props.examplePlayers();
    this.props.deleteAllResults();
  }

  insertPlayer(playerName) {
    if (playerName) {
      this.props.updatePlayers({
        name: playerName,
        id: this.getHighestPlayerId() + 1
      });
    }
  }

  getHighestPlayerId() {
    const highestId = this.props.players.reduce((zwischenergebnis, player) => {
      return player.id > zwischenergebnis ? player.id : zwischenergebnis;
    }, -1);
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
    return opponentId || 0; // opponentId is never 0
  }

  getPairings(roundNumber) {
    const players = this.props.players;
    const numberOfPlayers = players.length;
    const pairings = [];
    let alreadyPaired = new Map();
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
      if (! alreadyPaired.get(whiteID) &&
          ! alreadyPaired.get(blackID)) {
        pairings.push(pObj);
        alreadyPaired.set(whiteID, true);
        alreadyPaired.set(blackID, true);
      }
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

  saveResult(e, round, whiteID, blackID) {
    this.props.updateResults({
      result: parseFloat(e.target.value),
      round,
      whiteID,
      blackID
    });
  }

  getResult(whiteID, blackID) {
    const results = this.props.results;
    const filteredResults = results.filter((result) => {
      return result.whiteID === whiteID &&
        result.blackID === blackID;
    });
    return filteredResults[0];
  }

  getPlayerById(id) {
    const players = this.props.players;
    const filtered = players.filter(player => {
      return player.id === id;
    });
    if (filtered.length > 1) {
      console.log('errrrrrrrr');
    }
    return filtered[0];
  }

  getPointsForPlayer(playerId) {
    let pointsAsWhite = 0,
      pointsAsBlack = 0;
    this.props.results.forEach(result => {
      if(result.result !== -1) {
        if(result.whiteID === playerId) {
          pointsAsWhite += result.result;
        } else if (result.blackID === playerId) {
          pointsAsBlack += (1 - result.result);
        }
      }
    });
    return pointsAsWhite + pointsAsBlack;
  }

  floatToFraction(float) {
    if(parseInt(float) === float) {
      return float;
    } else if(float === 0.5) {
      return '½';
    } else if(float - parseInt(float) === 0.5) {
      return `${parseInt(float)}½`;
    } else {
      return float;
    }
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
    results: state.results
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayers: (data) => dispatch(updatePlayers(data)),
    deleteAllPlayers: () => dispatch(deleteAllPlayers()),
    deletePlayer: (id) => dispatch(deletePlayer(id)),
    examplePlayers: () => dispatch(examplePlayers()),
    exampleResults: () => dispatch(exampleResults()),
    updateResults: (data) => dispatch(updateResults(data)),
    deleteAllResults: () => dispatch(deleteAllResults())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
