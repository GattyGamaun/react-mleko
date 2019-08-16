import React from 'react';
import MainImg from "../../components/main-img";
import {articles} from '../../data/data';
import ListOfArticles from '../../components/articles';
import Schedule from '../../components/schedule';

function Main() {
  return (
    <section>
      <MainImg />
      <Schedule />
      <ListOfArticles articles={articles} />
    </section>
  )
}

export default Main;
