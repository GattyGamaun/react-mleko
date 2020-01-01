import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './layout/main';
import Contacts from './layout/contacts';
import Photo from './layout/photo';
import Building from './layout/building';
import { getChristmas, getThrone, getTrinity } from './components/photoGrid';
import { getBuildings1, getBuildings2, getBells } from './components/bulding';
import NotFound from './components/notFound';

ReactDOM.render(
  (<BrowserRouter>
    <App>
      <Switch>
        <Route path='/' component={Main} exact/>
        <Route path='/gallery' component={Photo}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/building' component={Building}/>
        <Route path='/2019/building/bells' component={getBells}/>
        <Route path='/2017/building/1' component={getBuildings1}/>
        <Route path='/2017/building/2' component={getBuildings2}/>
        <Route path='/2018/christmas' component={getChristmas}/>
        <Route path='/2018/throne' component={getThrone}/>
        <Route path='/2018/trinity' component={getTrinity}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    </App>
  </BrowserRouter>)
  , document.getElementById('root'));

