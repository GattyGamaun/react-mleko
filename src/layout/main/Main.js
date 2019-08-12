import React from 'react';
import MainImg from "../../components/main-img/MainImg";
import {articles} from '../../data/data';
import ListOfArticles from '../../components/articles/ListOfArticles';
import Schedule from '../../components/schedule/Schedule';

function Main() {
  return (
    <section>
      {/*<MainImg />*/}
      <Schedule />
      <ListOfArticles articles={articles} />
    </section>
  )
}

export default Main;
