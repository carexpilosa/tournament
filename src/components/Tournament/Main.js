import React from 'react';
import PlayerList from './PlayerList';
import CrossTable from './CrossTable';
import Pairings from './Pairings';
import Input from './Input';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'Hotte',
          order: 0.1,
          number: 1
        },
        {
          name: 'Susi',
          order: 0.2,
          number: 2
        },
        {
          name: 'Karl',
          order: 0.3,
          number: 3
        },
        {
          name: 'Bernd',
          order: 0.4,
          number: 4
        }
      ],
      inputValue: ''
    };
  }
  
  render() {
    const players = this.state.players;
    for(let i = 1; i < players.length; i++) {
      console.log(i + '.ST: ', this.getPairings(i));
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
    let ret;
    for (let i = 1; i < numberOfPlayers; i++) {
      if (i !== playerNumber &&
        (
          ((playerNumber + i) % (numberOfPlayers - 1) === roundNumber) ||
          (
            roundNumber === numberOfPlayers - 1 &&
            (playerNumber + i) % (numberOfPlayers - 1) === 0
          )
        )) {
        ret = i;
        break;
      }
    }
    if (! ret) {
      ret = numberOfPlayers;
    }
    return ret;
  }
  
  getPairings(roundNumber) {
    const players = this.state.players;
    const numberOfPlayers = players.length;
    const pairings = [];
    const pairingObj = {};
    players.slice(0, -1).forEach(player => {
      const opponentNumber = this.getOpponentIdx(numberOfPlayers, roundNumber, player.number);
      const newPairing = this.getPairing(player.number, opponentNumber);
      pairings.push(newPairing);
      pairingObj[newPairing[0]] = newPairing[1];
    });
    console.log(pairingObj);
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