import React, { Fragment } from 'react';
import './App.css';

import Header from './layout/header/Header';
import Navigation from './layout/navigation/Navigation';
import Footer from './layout/footer/Footer';

const App = ({ children }) => (
  <Fragment>
        <Header />
        <Navigation />
        {children}
        <Footer />
  </Fragment>
);

export default App;
