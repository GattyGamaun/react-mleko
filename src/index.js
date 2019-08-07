import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './_custom.scss';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './layout/main/Main';
import Contacts from './layout/contacts/Contacts';
import Photo from './layout/photo/Photo';

ReactDOM.render(
  (<BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/photo' component={Photo}/>
        <Route path='/contacts' component={Contacts}/>
      </Switch>
    </App>
  </BrowserRouter>)
  , document.getElementById('root'));

