import React from 'react';
import './hamburgers.css';

function Hamburger() {
  return (
    <button className="hamburger hamburger--3dy" type="button" id="menu-toggle">
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

export default Hamburger;
