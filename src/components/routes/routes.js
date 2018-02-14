import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import { PrivateRoute , AuthentionRoute } from './extendedroutes';
import Loading from '../../components/common/loadingcomponent';

const Login = Loadable({loader : () => import('./login/loginpage'),loading : Loading});
const Home = Loadable({loader : () => import('./home/homepage'),loading : Loading});
const About = Loadable({loader : () => import('./about/aboutpage'),loading : Loading});
const Error = Loadable({loader : () => import('./error/errorpage'),loading : Loading});

export default () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <AuthentionRoute path="/login" component={Login}/>
    <Route path="/about" component={About}/>
    <Route component={Error} />
  </Switch>
)
