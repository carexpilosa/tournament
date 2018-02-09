import React from 'react';
import {connect} from 'react-redux';
import { updateData } from '../actions';
import Sub from './Sub';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.boundCallBackFct = this.callBackFct.bind(this);
    console.log(this);
  }
  
  componentDidMount() {
    console.log('+++');
  }

  render() {
    console.log(`counter => ${this.state.counter}`);
    return <div>
      <h3>Test Component</h3>
      <input type="text" onChange={(e) => this.onInputChange(e)} />
      {
        Object.keys(this.props.data).map(k => <div key={k}>{k}</div>)
      }
      <Sub callbF={this.boundCallBackFct} />
    </div>;
  }

  callBackFct() {
    console.log('########', this.state);
  }

  onInputChange(e) {
    let data = {};
    data[Math.floor(10*Math.random())] = 
      {
        eins: '###'+new Date().getSeconds(),
      };
    this.props.updateData(data);
    this.setState({counter: this.state.counter + 1});
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