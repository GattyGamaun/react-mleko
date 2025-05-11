import React from 'react';
import data from '../../data/about.json';

const VideoFrame = () => {
  return (
    <section className="video">
      <div className="m-2">
        <iframe title="Ретроспектива" src={data.buildings.youtube.link4} />
      </div>
      <div className="m-2">
        <iframe title="Видео проекта" src={data.buildings.youtube.link1} />
      </div>
      <div className="m-2">
        <iframe title="Видео стройки" src={data.buildings.youtube.link2} />
      </div>
      <div className="m-2">
        <iframe title="Видео колоколов" src={data.buildings.youtube.link3} />
      </div>
    </section>
  );
};

export default VideoFrame;
