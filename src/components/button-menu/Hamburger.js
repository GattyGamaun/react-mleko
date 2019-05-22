import React, { Component } from 'react';
import './_sass/hamburgers/hamburgers.scss';
import './_style.scss';

const hamburger = document.querySelector('#menu-toggle');
// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('is-active');
// });
console.log(hamburger);
class Hamburger extends Component {
  render() {
    return (
      <button className="hamburger hamburger--3dy"
              type="button"
              id="menu-toggle"
              onClick={() => {
                hamburger.classList.toggle('is-active');
              }}>
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
      </button>
    );
  }
}

export default Hamburger;
