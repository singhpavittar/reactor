import { combineReducers } from 'redux';

import home from './home/homecontainer';
import login from './login/logincontainer';

export default combineReducers({
  home,
  login
});
