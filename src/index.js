import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import Main from './layout/main';
import Contacts from './layout/contacts';
import Photo from './layout/photo';
import Video from './layout/video';
import GetPhotos from './components/photoGrid';
import NotFound from './components/notFound';
import HtmlVideoList from './components/html-video-list';
import data from './data/about.json';

import { blessing } from './data/blessing';

import {
  buildings_2017_1,
  buildings_2017_2,
  bells,
  buildings_2020,
  komelin,
  church2021,
  church2022,
} from './data/buildings';
import {
  christmas2018,
  throne2018,
  trinity2018,
  willow2020,
  easter2020,
  throne2021,
  throne2022,
  easter2021,
  trinity2021,
  trinity2022,
  easter2022,
  pray2022,
  tabynsk2022,
  easter2023,
  ringer2023,
  kids2025,
} from './data/holidays';
import {
  different_2016,
  different_2018,
  different_2019,
  different_2020,
  winter2021,
  winter2022,
} from './data/different';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Photo />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/video" element={<Video />} />
        <Route path="/2016/different" element={<GetPhotos photos={different_2016} />} />
        <Route path="/2017/1" element={<GetPhotos photos={buildings_2017_1} />} />
        <Route path="/2017/2" element={<GetPhotos photos={buildings_2017_2} />} />
        <Route path="/2018/christmas" element={<GetPhotos photos={christmas2018} />} />
        <Route path="/2018/throne" element={<GetPhotos photos={throne2018} />} />
        <Route path="/2018/trinity" element={<GetPhotos photos={trinity2018} />} />
        <Route path="/2018/different" element={<GetPhotos photos={different_2018} />} />
        <Route path="/2019/different" element={<GetPhotos photos={different_2019} />} />
        <Route path="/2019/bells" element={<GetPhotos photos={bells} />} />
        <Route path="/2020/3" element={<GetPhotos photos={buildings_2020} />} />
        <Route path="/2020/different" element={<GetPhotos photos={different_2020} />} />
        <Route path="/2020/willow" element={<GetPhotos photos={willow2020} />} />
        <Route path="/2020/easter" element={<GetPhotos photos={easter2020} />} />
        <Route path="/2021/winter" element={<GetPhotos photos={church2021} />} />
        <Route path="/2021/komelin" element={<GetPhotos photos={komelin} />} />
        <Route path="/2021/throne" element={<GetPhotos photos={throne2021} />} />
        <Route path="/2021/easter" element={<GetPhotos photos={easter2021} />} />
        <Route path="/2021/winter" element={<GetPhotos photos={winter2021} />} />
        <Route path="/2021/trinity" element={<GetPhotos photos={trinity2021} />} />
        <Route path="/2022/winter" element={<GetPhotos photos={winter2022} />} />
        <Route path="/2022/inner" element={<GetPhotos photos={church2022} />} />
        <Route path="/2022/throne" element={<GetPhotos photos={throne2022} />} />
        <Route path="/2022/easter" element={<GetPhotos photos={easter2022} />} />
        <Route path="/2022/trinity" element={<GetPhotos photos={trinity2022} />} />
        <Route path="/2022/pray" element={<GetPhotos photos={pray2022} />} />
        <Route
          path="/2022/tabynsk"
          element={
            <>
              <GetPhotos photos={tabynsk2022} />
              <HtmlVideoList />
            </>
          }
        />
        <Route path="/2022/building/winter" element={<GetPhotos photos={winter2022} />} />
        <Route path="/2023/easter" element={<GetPhotos photos={easter2023} />} />
        <Route path="/2023/ringer" element={<GetPhotos photos={ringer2023} />} />
        <Route path="/2025/kids" element={<GetPhotos photos={kids2025} />} />
        <Route path="/2025/blessing" element={<GetPhotos photos={blessing} title={data.buildings.blessing.title} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </App>
  </BrowserRouter>
);
