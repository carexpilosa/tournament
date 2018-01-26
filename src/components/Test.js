import React from 'react';
import {connect} from 'react-redux';
import { updateData } from '../../actions';

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h3>Test Component</h3>
      <input type="text" onChange={(e) => this.onInputChange(e)} />
    </div>;
  }

  onInputChange(e) {
    console.log(e.target.value);
    let data = {};
    data[Math.floor(10*Math.random())] = 
      {
        eins: '###'+new Date().getSeconds()
      };
    this.props.updateData(data);
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateData: (data) => dispatch(updateData(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);