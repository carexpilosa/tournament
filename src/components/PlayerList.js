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
          <table>
            <tbody>
            {
              players.map((sp, idx) => {
                return this.state.idOfPlayerToEdit === idx
                  ? <tr key={idx}>
                      <td colSpan="3">
                        <input type="text" defaultValue={sp.name}
                          onChange={this.updatePlayerName.bind(this)}
                          onKeyPress={this.inputKeyPress} />
                        <button onClick={this.updatePlayer.bind(this)}>ok</button>
                      </td>
                    </tr>
                  : <tr key={idx}>
                      <td>{sp.id} {sp.name}</td>
                      <td><button onClick={e => this.edit(e, idx)}>edit</button></td>
                      <td><button>delete</button></td>
                    </tr>;
              })
            }
            </tbody>
          </table>
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