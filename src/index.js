import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import Appcontainer from './appcontainer';

// TODO: // import registerServiceWorker from './registerServiceWorker';

import store, { history } from './store/configstore';

const rootElement = document.getElementById('root');

ReactDOM.render(<Appcontainer store={store} history={history}/>, rootElement);

// TODO:  // registerServiceWorker();
