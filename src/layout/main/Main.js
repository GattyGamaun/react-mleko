import React from 'react';
import MainImg from '../../components/main-img';
import { articles } from '../../data/data';
import ListOfArticles from '../../components/articles';
import Schedule from '../../components/schedule';
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
        </section>
        <Aside/>
      </div>
    </div>
  );
}

export default Main;
