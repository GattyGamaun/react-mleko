import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './_App.scss';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';

const App = ({ children }) => (
  <Fragment>
    <Header/>
    <section className='main-content'>
      {children}
    </section>

    <Footer/>
  </Fragment>
);

export default hot(App);
