import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  
  render() {
    return (
      <div>
        <input onChange={this.onChange.bind(this)} type="text" onKeyDown={this.onKeyDown.bind(this)}
          ref={(input) => { this.textInput = input; }} />
        <a href="#" onClick={this.aOnClick.bind(this)}>add</a>
      </div>
    );
  }

  onKeyDown(e) {
    if(e.key === 'Enter') {
      this.aOnClick();
    }
  }

  aOnClick() {
    this.props.insertPlayer(this.textInput.value);
  }

  onChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
}

export default Input;