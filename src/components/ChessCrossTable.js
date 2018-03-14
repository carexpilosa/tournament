import React from 'react';

class ChessCrossTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spieler: [],
      inputValue: ''
    };
  }
  
  render() {
    console.log(this.state.spieler);
    const spieler = this.state.spieler;
    return (
      <div>
        <h3>Cross Table</h3>
        <ul>
        {
          spieler.map((sp, idx) => <li key={idx}>{sp}</li>)
        }
        </ul>
        <input onChange={this.inputOnChange.bind(this)} type="text" 
          onKeyPress={this.inputOnKeyDown.bind(this)}
          value={this.state.inputValue} />
        <a href="#" onClick={this.aOnClick.bind(this)}>add</a>
        <p/>
        <table>
          <tbody>
          <tr><td></td>
        {
          spieler.map((sp, idx) => {
            return <td style={{border: '2px solid black'}} key={idx}>{sp }</td>;
          })
        }
        </tr>
        {
          spieler.map((sp, idx) => {
            return <tr key={idx}><td style={{border: '2px solid black'}}>{sp}</td>
            {
              this.state.spieler.map((sp, idx) => <td style={{border: '2px solid black'}} 
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

  inputOnKeyDown(e) {
    if(e.key === 'Enter') {
      this.setState({
        spieler: [ ...this.state.spieler, e.target.value ],
        inputValue: ''
      });
    }
  }

  aOnClick(e) {
    this.setState({
      spieler: [ ...this.state.spieler, e.target.previousSibling.value ],
      inputValue: ''
    });
  }

  inputOnChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
}

export default ChessCrossTable;