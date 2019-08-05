import React, {Fragment} from 'react';
import './App.scss';

import Header from './layout/header/Header';
import Navigation from './layout/navigation/Navigation';
import Footer from './layout/footer/Footer';

const App = ({children}) => (
  <Fragment>
    <div className="content">
    <Header/>
      <Navigation/>
      {children}
    </div>
    <Footer/>
  </Fragment>
);

export default App;
