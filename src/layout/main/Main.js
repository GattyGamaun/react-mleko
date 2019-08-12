import React from 'react';
import MainImg from "../../components/main-img/MainImg";
import {articles} from '../../data/data';
import ListOfArticles from '../../components/articles/ListOfArticles';
import Schedule from '../../components/schedule/Schedule';

function Main() {
  return (
    <div>
      {/*<MainImg />*/}
      <Schedule />
      <ListOfArticles articles={articles} />
    </div>
  )
}

export default Main;
