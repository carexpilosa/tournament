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

    const byPoints = (a, b) => {
      return a.points < b.points ? 1
        : b.points < a.points ? -1
          : a.numberOfGames > b.numberOfGames ? 1
            : b.numberOfGames > a.numberOfGames ? -1
              : 0;
    };

    players
      .map(player => {
        return { ...player,
          points: this.calculatePoints(player).points,
          numberOfGames: this.calculatePoints(player).numberOfGames,
        };
      })
      .sort(byPoints)
      .forEach(sortedModifiedPlayer => {
        divs.push(<div key={`k${keyCounter++}`}>{sortedModifiedPlayer.name}</div>);
        divs.push(<div key={`k${keyCounter++}`}
          style={{textAlign: 'right', backgroundColor: 'green'}}>{sortedModifiedPlayer.points}</div>);
        divs.push(<div key={`k${keyCounter++}`}>/</div>);
        divs.push(<div key={`k${keyCounter++}`}>{sortedModifiedPlayer.numberOfGames}</div>);
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
      if (this.validResult(elm.result)) {
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

  validResult(result) {
    if (typeof result === undefined) {
      return false;
    }

    const res = parseFloat(result);
    return res === 0 || res === 0.5 || res === 1;
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