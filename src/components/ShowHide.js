import React from 'react';

class ShowHide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: typeof props.visibility === 'undefined' ? true : props.visibility
    };
  }

  render() {
    return (
      <div>
        <div onClick={e => this.setState({visibility: !this.state.visibility})}>
          <h4>{ this.props.title } <span style={{cursor: 'pointer'}}>{ this.state.visibility ? '[ einklappen ]' : '[ ausklappen ]' }</span></h4>
        </div>
        { this.state.visibility
          ? this.props.children
          : null
        }
      </div>
    );
  }
}

export default ShowHide;