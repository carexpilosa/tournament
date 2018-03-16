import React from 'react';

class ChessTournament extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log('=>', this.props.inputValue);
    return (
      <div>
        <input onChange={this.props.inputOnChange} type="text" 
          onKeyDown={this.props.onKeyDown}
          value={this.props.inputValue}
           />
        <a href="#" onClick={this.props.aOnClick}>add</a>
      </div>
    );
  }
}

export default ChessTournament;