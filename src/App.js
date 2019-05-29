import React, { Component } from 'react';
import './App.css';

import Header from './layout/header/Header';
import Navigation from './layout/navigation/Navigation';
// import MainImg from "./components/main-img/MainImg";
import Footer from './layout/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        {/*<MainImg />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
