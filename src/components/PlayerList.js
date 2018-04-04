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
              : <div key={idx} style={{width: '200px', height: '1.5em', border: '1px solid red'}}>
                  <li style={{display: 'inline'}} onDoubleClick={(e) => this.iedit(e, idx)}>
                    {idx + 1} {sp.name}</li>
                  <button onClick={e => this.edit(e, idx)}>edit</button>
                  <button>delete</button>
                </div>;
          })
        }
        </ul>
      </div>
    );
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
  }
}

export default PlayerList;