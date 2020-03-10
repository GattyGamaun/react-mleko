import React, { Component } from 'react';
import './_style.scss';

class BackToTop extends Component {

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className='back-to-top'>
        <button
          onClick={this.scrollToTop}>
          Наверх
        </button>
      </div>
    );
  }
}

export default BackToTop;
