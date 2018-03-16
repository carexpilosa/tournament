import React from 'react';

class CrossTable extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const players = this.props.players;
    return (
      <div>
        <h4>Cross Table</h4>
        <table>
          <tbody>
          <tr><td></td>
        {
          players.map((sp, idx) => {
            return <td style={{border: '2px solid black'}} key={idx}>{sp.name }</td>;
          })
        }
        </tr>
        {
          players.map((sp, idx) => {
            return <tr key={idx}><td style={{border: '2px solid black'}}>{sp.name}</td>
            {
              this.props.players.map((sp, idx) => <td style={{border: '2px solid black'}} 
                key={idx}>- : -</td>)
            }
            </tr>;
          })
        }
        </tbody>
        </table>
      </div>
    );
  }
}

export default CrossTable;