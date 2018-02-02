import React from 'react';

class Sub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcounter: 0
    };
  }

  render() {
    return <div>
      <h3>Sub</h3>
      <a href="#" onClick={() => this.props.callbF()}>callbF</a>
    </div>;
  }
}

export default Sub;