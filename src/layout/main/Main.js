import React from 'react';
import MainImg from "../../components/main-img/MainImg";
import {articles} from '../../data/data';
import ListOfArticles from '../../components/articles/ListOfArticles';

function Main() {
  return (
    <div>
      <MainImg />
      <ListOfArticles articles={articles}/>
    </div>
  )
}

export default Main;
