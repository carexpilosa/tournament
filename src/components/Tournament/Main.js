import React from 'react';
import PlayerList from './PlayerList';
import CrossTable from './CrossTable';
import Pairings from './Pairings';
import Input from './Input';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      inputValue: ''
    };
  }
  
  render() {
    const players = this.state.players;
    for(let i = 1; i < players.length; i++) {
      //console.log(i + '.ST: ', this.getPairings(i));
      this.getPairings(i);
    }

    return (
      <div>
        <h3>Chess Tournament</h3>
        <PlayerList players={players}/>
        <Input onKeyDown={this.inputOnKeyDown.bind(this)} aOnClick={this.aOnClick.bind(this)}
          inputOnChange={this.inputOnChange.bind(this)} inputValue={this.state.inputValue} />
        <CrossTable players={players}/>
        <Pairings players={players} round={1}/>
      </div>
    );
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

  getOpponentIdx(numberOfPlayers, roundNumber, playerNumber) {
    for (let i = 1; i < numberOfPlayers; i++) {
      if (i !== playerNumber &&
        (playerNumber + i) % (numberOfPlayers - 1) === roundNumber) {
        return i;
      }
    }
    return numberOfPlayers;
  }
  
  getPairings(roundNumber) {
    const players = this.state.players;
    const numberOfPlayers = players.length;
    const pairings = [];
    const pairingObj = {};
    players.slice(0, -1).forEach(player => {
      const opponentNumber = this.getOpponentIdx(numberOfPlayers, roundNumber, player.number);
      console.log('ST '+roundNumber, 'player = '+player.number, 'opponent: '+opponentNumber);
      const newPairing = this.getPairing(player.number, opponentNumber);
      pairings.push(newPairing);
      pairingObj[newPairing[0]] = newPairing[1];
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

export default Main;