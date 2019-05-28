import React from 'react';
import large from './img/main-img-desktop.jpg';
// import large from './img/photo-3.jpg';
import medium from './img/main-img-tablet.jpg';
// import medium from './img/photo-1.jpg';
import small from './img/main-img-mobile.jpg';
// import small from './img/photo-2.jpg';
import './MainImg.scss';

class MainImg extends React.Component {
  render () {
    return (
      <div>
        <img src={large}
             srcSet={`${large} 1200w, ${medium} 850w, ${small} 500w`}
             alt="Jesus in the coffin" className="main-img"/>
      </div>
    )
  }
}

export default MainImg;
