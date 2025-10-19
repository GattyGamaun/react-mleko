import React from 'react';
import './_style.scss';

const HtmlVideo = ({ src, height }) => {
  return (
    <video height={height} controls>
      <source src={src} />
    </video>
  );
};

export default HtmlVideo;
