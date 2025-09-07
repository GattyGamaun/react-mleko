import React from 'react';
import large from './img/main-img.jpg';
import './_style.scss';

function MainImg() {
  return (
    <div className="wrapper-image">
      <img src={large} alt="Church" className="main-img" />
    </div>
  );
}

export default MainImg;
