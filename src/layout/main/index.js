import React from 'react';
import MainImg from '../../components/main-img';
import { articles } from '../../data/articles';
import ListOfArticles from '../../components/articles';
import Schedule from '../../components/schedule';
import BackToTop from '../../components/backToTop';
import Aside from '../aside';
import './_style.scss';

function Main() {
  return (
    <div>
      <MainImg/>
      <div className='wrapper'>
        <section className='main'>
          <Schedule/>
          <ListOfArticles articles={articles}/>
          <BackToTop/>
        </section>
        <Aside/>
      </div>
    </div>
  );
}

export default Main;
