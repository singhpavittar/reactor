import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import App from './components/app'
import './style/main.css';
import store, { history } from './store/configstore';

// Element where we will inject our App
const rootElement = document.getElementById('root');

const Inject = () => (
  <Provider store={store}>
    <Router history={history}>
      <App store={store} history={history}/>
    </Router>
  </Provider>
)

// Inject App to our Root Element
ReactDOM.render(<Inject />, rootElement);
