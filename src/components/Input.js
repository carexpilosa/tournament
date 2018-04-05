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
        <button onClick={this.buttonOnClick.bind(this)}>add</button>
      </div>
    );
  }

  onKeyDown(e) {
    if(e.key === 'Enter') {
      this.buttonOnClick();
    }
  }

  buttonOnClick() {
    this.props.insertPlayer(this.textInput.value);
    this.textInput.value = '';
    this.textInput.focus();
  }

  onChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
}

export default Input;