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
    const newPlayer = {
      name: playername,
      order: Math.random()
    };
    const newPlayerArray = [ ...this.state.players, newPlayer ].sort((a, b) => {
      return a.order > b.order ? 1 : a.order < b.order ? -1 : 0;
    });
    this.setState({
      players: newPlayerArray,
      inputValue: ''
    });
  }
}

export default Main;