import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store.js';

import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faUserPlus, faSpinner)

ReactDOM.render(
    <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
