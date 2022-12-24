import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import './index.css';

import Main from './layout/main';
import Contacts from './layout/contacts';
import Photo from './layout/photo';
import Building from './layout/building';
import GetPhotos from './components/photoGrid';
import NotFound from './components/notFound';
import HtmlVideoList from './components/html-video-list';

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
} from './data/holidays';
import {
  different_2016,
  different_2018,
  different_2019,
  different_2020,
  winter2021,
  winter2022,
} from './data/different';

ReactDOM.render(
  <HashRouter>
    <App>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/gallery" component={Photo} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/building" component={Building} />
        <Route path="/2016/different">
          <GetPhotos photos={different_2016} />
        </Route>
        <Route path="/2017/building/1">
          <GetPhotos photos={buildings_2017_1} />
        </Route>
        <Route path="/2017/building/2">
          <GetPhotos photos={buildings_2017_2} />
        </Route>
        <Route path="/2019/building/bells">
          <GetPhotos photos={bells} />
        </Route>
        <Route path="/2020/building/different">
          <GetPhotos photos={buildings_2020} />
        </Route>
        <Route path="/2021/building/winter">
          <GetPhotos photos={church2021} />
        </Route>
        <Route path="/2021/building/komelin">
          <GetPhotos photos={komelin} />
        </Route>
        <Route path="/2022/building/inner">
          <GetPhotos photos={church2022} />
        </Route>
        <Route path="/2018/christmas">
          <GetPhotos photos={christmas2018} />
        </Route>
        <Route path="/2018/throne">
          <GetPhotos photos={throne2018} />
        </Route>
        <Route path="/2018/trinity">
          <GetPhotos photos={trinity2018} />
        </Route>
        <Route path="/2018/different">
          <GetPhotos photos={different_2018} />
        </Route>
        <Route path="/2019/different">
          <GetPhotos photos={different_2019} />
        </Route>
        <Route path="/2020/different">
          <GetPhotos photos={different_2020} />
        </Route>
        <Route path="/2020/willow">
          <GetPhotos photos={willow2020} />
        </Route>
        <Route path="/2020/easter">
          <GetPhotos photos={easter2020} />
        </Route>
        <Route path="/2021/throne">
          <GetPhotos photos={throne2021} />
        </Route>
        <Route path="/2021/easter">
          <GetPhotos photos={easter2021} />
        </Route>
        <Route path="/2021/winter">
          <GetPhotos photos={winter2021} />
        </Route>
        <Route path="/2021/trinity">
          <GetPhotos photos={trinity2021} />
        </Route>
        <Route path="/2022/throne">
          <GetPhotos photos={throne2022} />
        </Route>
        <Route path="/2022/easter">
          <GetPhotos photos={easter2022} />
        </Route>
        <Route path="/2022/trinity">
          <GetPhotos photos={trinity2022} />
        </Route>
        <Route path="/2022/pray">
          <GetPhotos photos={pray2022} />
        </Route>
        <Route path="/2022/tabynsk">
          <GetPhotos photos={tabynsk2022} />
          <HtmlVideoList />
        </Route>
        <Route path="/2022/building/winter">
          <GetPhotos photos={winter2022} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </App>
  </HashRouter>,
  document.getElementById('root')
);
