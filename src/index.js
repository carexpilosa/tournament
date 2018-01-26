import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';
import { Provider } from 'react-redux';
import { store } from '../store';
import './styles/styles.css';


ReactDOM.render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById('app')
);





