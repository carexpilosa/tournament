import React from 'react';
import { connect } from 'react-redux';

import PlayerList from './PlayerList';
//import Input from './Input';
//import CrossTable from './CrossTable';
//import Pairings from './Pairings';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'Horst',
          id: 1
        },
        {
          name: 'Hugo',
          id: 2
        },
        {
          name: 'Anton',
          id: 3
        },
        {
          name: 'Fred',
          id: 4
        }
      ],
      results: [],
      inputValue: ''
    };
  }

  componentWillMount() {
    
  }

  render() {
    const players = this.state.players;
    return (
      <div>
        <h3>Tournament</h3>
        <PlayerList />
      </div>
    );
  }
}

const mapStateToProps = () => {};
const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
