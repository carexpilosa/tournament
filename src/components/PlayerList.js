import React from 'react';

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idOfPlayerToEdit: undefined,
      playerNameEdited: ''
    };
  }

  render() {
    const players = this.props.players;
    const divs = [];
    let counter = 0;
    players.forEach(sp => {
      divs.push(<div key={`d${counter++}`} >{sp.id + 1} </div>);
      divs.push(this.state.idOfPlayerToEdit === sp.id
        ? <div key={`d${counter++}`}>
            <input type="text" defaultValue={sp.name}
              onChange={this.updatePlayerName.bind(this)}
              onKeyPress={this.inputKeyPress} />
          </div>
        : <div key={`d${counter++}`}>{sp.name}</div>);
      divs.push(this.state.idOfPlayerToEdit === sp.id
        ? <button key={`d${counter++}`} onClick={this.updatePlayer.bind(this)}>ok</button>
        : <div key={`d${counter++}`}><button onClick={e => this.edit(e, sp.id)}>edit</button></div>);
      divs.push(this.state.idOfPlayerToEdit === sp.id
        ? <div key={`d${counter++}`}></div>
        : <div key={`d${counter++}`} onClick={e => this.props.deletePlayer(sp.id)} >
            <button>delete</button>
          </div>);
    });

    return (
      <div>
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

  inputKeyPress(e) {
    console.log('inputKeyPress');
  }

  deletePlayer(playerID) {
    this.props.deletePlayer(playerID);
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

export default PlayerList;