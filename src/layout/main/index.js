import React from 'react';
import { articles } from '../../data/articles';
import data from '../../data/about.json';
import ListOfArticles from '../../components/articles';
import Schedule from '../../components/schedule';
import BackToTop from '../../components/backToTop';
import Aside from '../aside';
import './_style.scss';

function Main() {
  return (
    <div>
      <div className="wrapper-image">
        <img src={data.links.mainImgUrl} alt="Church" className="main-img" />
      </div>
      <div className="wrapper">
        <section className="main">
          <Schedule />
          <ListOfArticles articles={articles} />
          <BackToTop />
        </section>
        <Aside />
      </div>
    </div>
  );
}

export default Main;
