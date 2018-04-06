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
    let divs = [];
    players.map(sp => {
      divs.push(this.state.idOfPlayerToEdit === sp.id
        ? <div>
            <input type="text" defaultValue={sp.name}
              onChange={this.updatePlayerName.bind(this)}
              onKeyPress={this.inputKeyPress} />
          </div>
        : <div style={{border: '1px solid green'}}>{sp.id} {sp.name}</div>);
      divs.push(this.state.idOfPlayerToEdit === sp.id
        ? <button onClick={this.updatePlayer.bind(this)}>ok</button>
        : <div><button onClick={e => this.edit(e, sp.id)}>edit</button></div>);
      divs.push(this.state.idOfPlayerToEdit === sp.id
        ? <div></div>
        : <div><button>delete</button></div>);
    });

    return (
      <div>
        <h4>List Of Players</h4>
        <div style={{
          paddingTop: '30px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, max-content)',
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