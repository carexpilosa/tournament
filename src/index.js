import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Main from './components/Tournament/Main';
import './styles/styles.css';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_PLAYERS':
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Main />
    </div>
  </Provider>,
  document.getElementById('app')
);



