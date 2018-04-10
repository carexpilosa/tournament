import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import Main from './components/Main';
import './styles/styles.css';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <Main />
      </div>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);

