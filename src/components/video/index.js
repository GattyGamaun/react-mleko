import React from 'react';
import { buildings } from '../../data/about.json';

const VideoFrame = () => {
  return (
    <section className="video">
      <div className="m-2">
        <iframe title="Ретроспектива" src={buildings.youtube.link4} />
      </div>
      <div className="m-2">
        <iframe title="Видео проекта" src={buildings.youtube.link1} />
      </div>
      <div className="m-2">
        <iframe title="Видео стройки" src={buildings.youtube.link2} />
      </div>
      <div className="m-2">
        <iframe title="Видео колоколов" src={buildings.youtube.link3} />
      </div>
    </section>
  );
};

export default VideoFrame;
