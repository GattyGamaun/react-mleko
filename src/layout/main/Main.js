import React from 'react';
import MainImg from "../../components/main-img";
import {articles} from '../../data/data';
import ListOfArticles from '../../components/articles';
import Index from '../../components/schedule';

function Main() {
  return (
    <section>
      <MainImg />
      <Index />
      <ListOfArticles articles={articles} />
    </section>
  )
}

export default Main;
