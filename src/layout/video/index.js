import React from 'react';
import './_style.scss';
import data from '@/data/about.json';
import HtmlVideo from '@/components/html-video-list/html-video';

function Video() {
  return (
    <React.Fragment>
      <section className="video">
        <div className="m-2 mt-1" style={{ textAlign: 'center' }}>
          <h5 className="title">{data.buildings.blessing.title}</h5>
          <HtmlVideo src={data.buildings.blessing.url} height="450" />
        </div>
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
    </React.Fragment>
  );
}

export default Video;
