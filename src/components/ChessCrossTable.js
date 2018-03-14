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
    return (
      <div>
        <h3>Cross Table</h3>
        <ul>
        {
          this.state.spieler.map((sp, idx) => <li key={idx}>{sp}</li>)
        }
        </ul>
        <input onChange={this.inputOnChange.bind(this)} type="text" 
          value={this.state.inputValue} />
        <a href="#" onClick={this.aOnClick.bind(this)}>add</a>
      </div>
    );
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