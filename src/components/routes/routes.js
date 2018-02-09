import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from '../../components/common/loadingcomponent';
const Home = Loadable({loader : () => import('./home/homepage'),loading : Loading});
const About = Loadable({loader : () => import('./about/aboutpage'),loading : Loading});
const Error = Loadable({loader : () => import('./error/errorpage'),loading : Loading});

export default () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route component={Error} />
  </Switch>
)
