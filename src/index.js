import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/main-img/MainImg';
import Contacts from './layout/contacts/Contacts';

ReactDOM.render(
  (<BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contacts' component={Contacts}/>
      </Switch>
    </App>
  </BrowserRouter>)
  , document.getElementById('root'));

