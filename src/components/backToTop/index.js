import React from 'react';
import './_style.scss';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="back-to-top">
      <button onClick={scrollToTop}>Наверх</button>
    </div>
  );
};

export default BackToTop;
