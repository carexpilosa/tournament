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
    return (
      <div>
        <h4>List Of Players</h4>
        <ul>
        {
          players.map((sp, idx) => {
            return this.state.idOfPlayerToEdit === idx
              ? <li key={idx}>{idx + 1} <input type ="text" id={`pl${idx}`}
                  defaultValue={sp.name} onChange={this.updatePlayerName.bind(this)} />
                  <button onClick={this.updatePlayer.bind(this)}>ok</button></li>
              : <li key={idx} id={`pl${idx}`} onDoubleClick={(e) => this.edit(e)}>
                  {idx + 1} {sp.name}</li>;
          })
        }
        </ul>
      </div>
    );
  }

  edit(e) {
    const playerID = parseInt(e.target.id.replace(/^pl/, ''));
    this.setState({
      idOfPlayerToEdit: playerID
    });
  }

  updatePlayerName(e) {
    this.setState({
      playerNameEdited: e.target.value
    });
  }

  updatePlayer() {
    const { idOfPlayerToEdit, playerNameEdited } = this.state;
    const player = this.props.getPlayerById(idOfPlayerToEdit);
    if (player && typeof idOfPlayerToEdit !== undefined && playerNameEdited) {
      this.props.updatePlayers({
        id: idOfPlayerToEdit,
        name: playerNameEdited
      });
    }
  }
}

export default PlayerList;