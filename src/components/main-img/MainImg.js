import React, { Component } from 'react';
import large from './img/main-img-desktop.jpg';
import medium from './img/main-img-tablet.jpg';
import small from './img/main-img-mobile.jpg';
import './_MainImg.scss';

class MainImg extends Component {
  render () {
    return (
      <div className="wrapper-image">
        <img src={large}
             srcSet={`${large} 1200w, ${medium} 850w, ${small} 500w`}
             alt="Jesus in the coffin" className="main-img"/>
      </div>
    )
  }
}

export default MainImg;
