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
          'name': 'Schmalhans',
          'order': 0.0826898873245514,
          'number': 1
        },
        {
          'name': 'Hotte',
          'order': 0.1,
          'number': 2
        },
        {
          'name': 'Lumpi',
          'order': 0.15302177983324627,
          'number': 3
        },
        {
          'name': 'Susi',
          'order': 0.2,
          'number': 4
        },
        {
          'name': 'Georg',
          'order': 0.20081507921971453,
          'number': 5
        },
        {
          'name': 'Gitti',
          'order': 0.27795427396785355,
          'number': 6
        },
        {
          'name': 'Karl-Heinz',
          'order': 0.2983734380983851,
          'number': 7
        },
        {
          'name': 'Seppo',
          'order': 0.3,
          'number': 8
        },
        {
          'name': 'Bernd',
          'order': 0.4,
          'number': 9
        },
        {
          'name': 'Ristic',
          'order': 0.40831690859184855,
          'number': 10
        },
        {
          'name': 'Plemplem',
          'order': 0.44494656478135663,
          'number': 11
        },
        {
          'name': 'Heinrich',
          'order': 0.45251055382303407,
          'number': 12
        },
        {
          'name': 'Oleg',
          'order': 0.478084942178713,
          'number': 13
        },
        {
          'name': 'Lulu',
          'order': 0.67486824328,
          'number': 14
        },
        {
          'name': 'Otto',
          'order': 0.7514589418809869,
          'number': 15
        },
        {
          'name': 'Willi',
          'order': 0.8491021525563145,
          'number': 16
        },
        {
          'name': 'Kowalski',
          'order': 0.8620134855342321,
          'number': 17
        },
        {
          'name': 'Manne',
          'order': 0.9781792839547732,
          'number': 18
        }
      ],
      inputValue: ''
    };
  }

  render() {
    const players = this.state.players;
    return (
      <div>
        <h3>Chess Tournament</h3>
        <PlayerList players={players}/>
        <Input onKeyDown={this.inputOnKeyDown.bind(this)} aOnClick={this.aOnClick.bind(this)}
          inputOnChange={this.inputOnChange.bind(this)} inputValue={this.state.inputValue} />
        <CrossTable players={players}/>
        <Pairings players={players} round={1} getPairings={this.getPairings.bind(this)} />
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
    players.forEach((player, idx) => {
      if(idx === 0) return;
      console.log(idx);
      const opponentNumber = this.getOpponentId(numberOfPlayers, roundNumber, idx);
      const newPairing = this.getPairing(idx, opponentNumber);
      pairings.push(newPairing);
      pairingObj[newPairing[0]] = newPairing[1];
    });
    return pairingObj;
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
