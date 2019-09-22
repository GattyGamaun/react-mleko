import React from 'react';
import { buildings } from '../../data/about';

const VideoFrame = () => {
  return (
    <section>
      <div>
        <iframe title="Видео проекта" src={buildings.youtube.link1} />
      </div>
      <div>
        <iframe title="Видео стройки" src={buildings.youtube.link2} />
      </div>
    </section>
  );
};

export default VideoFrame;
