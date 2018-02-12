import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import Storeconnector from './storeconnector';

// TODO: // import registerServiceWorker from './registerServiceWorker';

import store, { history } from './store/configstore';

const rootElement = document.getElementById('root');

ReactDOM.render(<Storeconnector store={store} history={history}/>, rootElement);

// TODO:  // registerServiceWorker();
