import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import { store } from './reducers';
import Main from './components/Main';
import './styles/styles.css';

console.log('hae?');
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Main />
    </div>
  </Provider>,
  document.getElementById('app')
);

