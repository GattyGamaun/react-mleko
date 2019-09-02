import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './layout/main/Main';
import Contacts from './layout/contacts/Contacts';
import Photo from './layout/photo';
import Building from './layout/building';
import { getChristmas, getThrone, getTrinity } from './components/photoGrid';

ReactDOM.render(
  (<BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/photo' component={Photo}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/building' component={Building}/>
        <Route path='/2018/christmas' component={getChristmas}/>
        <Route path='/2018/throne' component={getThrone}/>
        <Route path='/2018/trinity' component={getTrinity}/>
      </Switch>
    </App>
  </BrowserRouter>)
  , document.getElementById('root'));

