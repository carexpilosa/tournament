import React from 'react';

import PlayerList from './PlayerList';
import Input from './Input';
import CrossTable from './CrossTable';
import Pairings from './Pairings';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'Horst'
        },
        {
          name: 'Hugo'
        },
        {
          name: 'Anton'
        },
        {
          name: 'Fred'
        }
      ],
      results: [],
      inputValue: ''
    };
  }

  createPairings() {
    console.log('createPairings', this.state);
  }

  render() {
    const players = this.state.players;
    return (
      <div>
        <h3>Tournament</h3>
        <button onClick={() => this.createPairings()}>create pairings</button>
        <PlayerList players={players} />
        <Input onKeyDown={this.inputOnKeyDown.bind(this)} aOnClick={this.aOnClick.bind(this)}
          inputOnChange={this.inputOnChange.bind(this)} inputValue={this.state.inputValue} />
        <CrossTable players={players} results={this.state.results}/>
        <Pairings players={players} round={1} getPairings={this.getPairings.bind(this)}
          saveResult={this.saveResult.bind(this)} />
        <a href="#" onClick={this.deleteAllPlayers.bind(this)}>delete all</a>
      </div>
    );
  }

  deleteAllPlayers() {
    this.setState({
      players: []
    });
  }

  inputOnKeyDown(e) {
    if(e.key === 'Enter') {
      this.insertPlayer(e.target.value);
    }
  }

  aOnClick(e) {
    this.insertPlayer(e.target.previousSibling.value);
  }

  inputOnChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  insertPlayer(playername) {
    if (playername) {
      const newPlayer = {
        name: playername,
        order: Math.random()
      };
      const newPlayerArray = [ ...this.state.players, newPlayer ].sort((a, b) => {
        return a.order > b.order ? 1 : a.order < b.order ? -1 : 0;
      });
      const NumberdPlayerArray = newPlayerArray.map((player, idx) => {
        player.number = idx + 1;
        return player;
      });
      this.setState({
        players: NumberdPlayerArray,
        inputValue: ''
      });
    }
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
    const players = this.state.players;
    const numberOfPlayers = players.length;
    const pairings = [];
    const pairingObj = {};
    const pairingMap = new Map();
    players.forEach((player, idx) => {
      if(idx === 0) return;
      const opponentNumber = this.getOpponentId(numberOfPlayers, roundNumber, idx);
      const [whiteID, blackID] = this.getPairing(idx, opponentNumber);
      const newPairing = this.getPairing(idx, opponentNumber);
      let pObj = {
        roundNumber,
        whiteID,
        blackID,
        result: -1
      };
      pairings.push(pObj);
      pairingObj[newPairing[0]] = newPairing[1];
      pairingMap.set(newPairing[0], newPairing[1]);
    });
    console.log('==== pairingObjs ====', pairings);
    return pairingMap;
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
    let newResultObj = {
      round,
      whiteID,
      blackID,
      result: parseFloat(e.target.value)
    };

    let newResults = { ...this.state.result, newResultObj };
    this.setState({
      results: [ ...this.state.results, newResultObj ]
    });
  }
}

export default Main;
