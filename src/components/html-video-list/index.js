import React from 'react';
import HtmlVideo from './html-video';

let videos = [
  {
    src: 'https://xn--80aanbnckgfdshn7bb2e5e.xn--90ais/assets/photo/2022/tabynsk/tabynsk-video-1.mp4',
    height: '450',
    id: 'tabynsk-video-1',
  },
  {
    src: 'https://xn--80aanbnckgfdshn7bb2e5e.xn--90ais/assets/photo/2022/tabynsk/tabynsk-video-2.mp4',
    height: '450',
    id: 'tabynsk-video-2',
  },
  {
    src: 'https://xn--80aanbnckgfdshn7bb2e5e.xn--90ais/assets/photo/2022/tabynsk/tabynsk-video-3.mp4',
    height: '450',
    id: 'tabynsk-video-3',
  },
  {
    src: 'https://xn--80aanbnckgfdshn7bb2e5e.xn--90ais/assets/photo/2022/tabynsk/tabynsk-video-4.mp4',
    height: '450',
    id: 'tabynsk-video-4',
  },
];

export default function HtmlVideoList() {
  return (
    <>
      {videos.map(video => {
        return <HtmlVideo src={video.src} height={video.height} key={video.id} />;
      })}
    </>
  );
}
