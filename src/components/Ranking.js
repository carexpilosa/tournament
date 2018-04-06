import React from 'react';

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idOfPlayerToEdit: undefined,
      playerNameEdited: ''
    };
  }

  render() {
    const players = this.props.players;
    let keyCounter = 0;
    let divs = [
      <div key={`k${keyCounter++}`}>Name</div>,
      <div key={`k${keyCounter++}`}>Pkt</div>,
      <div key={`k${keyCounter++}`}></div>,
      <div key={`k${keyCounter++}`}>Spiele</div>
    ];
    players.forEach(player => {
      const obj = this.calculatePoints(player);
      divs.push(<div key={`k${keyCounter++}`}>{player.name}</div>);
      divs.push(<div key={`k${keyCounter++}`}
        style={{textAlign: 'right', backgroundColor: 'green'}}>{obj.points}</div>);
      divs.push(<div key={`k${keyCounter++}`}>/</div>);
      divs.push(<div key={`k${keyCounter++}`}>{obj.numberOfGames}</div>);
    });

    return (
      <div>
        <h4>Ranking</h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, max-content)',
          gridColumnGap: '0.2em',
          gridRowGap: '0.2em'
        }}>
          {divs}
        </div>
      </div>
    );
  }

  calculatePoints(player) {
    const results = this.props.results;
    let obj = results.reduce((zwErgebnis = { points: 0, numberOfGames: 0 },
      elm, idx) => {
      if (typeof elm.result !== undefined && parseFloat(elm.result) !== -1) {
        if (elm.whiteID === player.id) {
          zwErgebnis.points += parseFloat(elm.result);
          zwErgebnis.numberOfGames += 1;
        } else if (elm.blackID === player.id) {
          zwErgebnis.points += (1 - parseFloat(elm.result));
          zwErgebnis.numberOfGames += 1;
        }
      }
      return zwErgebnis;
    }, { points: 0, numberOfGames: 0 });
    if (!obj) {
      obj = { points: 0, numberOfGames: 0 };
    }
    return obj;
  }

  inputKeyPress(e) {
    console.log('inputKeyPress');
  }

  mobileEdit(e, idx) {
    e.preventDefault();
    this.edit(e, idx);
  }

  edit(e, idx) {
    this.setState({
      idOfPlayerToEdit: idx
    });
  }

  updatePlayerName(e) {
    this.setState({
      playerNameEdited: e.target.value
    });
  }

  updatePlayer(e) {
    const { idOfPlayerToEdit, playerNameEdited } = this.state;
    const player = this.props.getPlayerById(idOfPlayerToEdit);
    if (player && typeof idOfPlayerToEdit !== undefined && playerNameEdited) {
      this.props.updatePlayers({
        id: idOfPlayerToEdit,
        name: playerNameEdited
      });
    }
    this.setState({
      idOfPlayerToEdit: undefined,
      playerNameEdited: ''
    });
  }
}

export default Ranking;