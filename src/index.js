import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.scss';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/main-img/MainImg';
import Contacts from './layout/contacts/Contacts';
import Photo from './layout/photo/Photo';

ReactDOM.render(
  (<BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/photo' component={Photo}/>
        <Route path='/contacts' component={Contacts}/>
      </Switch>
    </App>
  </BrowserRouter>)
  , document.getElementById('root'));

