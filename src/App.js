// import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';
import './_App.scss';
import Header from './layout/header';
import Footer from './layout/footer';

const App = ({ children }) => (
  <Fragment>
    <Header />
    <main className="main-content">{children}</main>
    <Footer />
  </Fragment>
);

export default App;
