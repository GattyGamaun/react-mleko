import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';
import './_App.scss';

import Header from './layout/header/Header';
import Navigation from './layout/navigation/Navigation';
import Footer from './layout/footer/Footer';

const App = ({ children }) => (
  <Fragment>
    <Header/>
    <Navigation/>
    <div className="content">
      {children}
    </div>
    <Footer/>
  </Fragment>
);

export default hot(App);
