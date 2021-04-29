import React from 'react';
import large from './img/main-img-desktop.jpg';
import small from './img/main-img-mobile.jpg';
import './_style.scss';

function MainImg() {
  return (
    <div className="wrapper-image">
      <img src={large}
           srcSet={`${large} 7843w, ${small} 800w`}
           alt="Church" className="main-img"/>
    </div>
  );
}

export default MainImg;
