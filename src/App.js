import React, { Component } from 'react';
import './App.css';

import Header from './layout/header/Header';
import Navigation from "./layout/navigation/Nav";
import MainImg from "./components/main-img/MainImg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <MainImg />
      </div>
    );
  }
}

export default App;
