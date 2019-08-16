import React from 'react';
import './_style.scss';
import img from './img/schedule.png';
import {schedule} from '../../data/about';

function Schedule() {
  return (
    <figure>
      <figcaption>
        <h3>{schedule.title}</h3>
      </figcaption>
      <img src={img} alt="Расписание"/>
      <p>{schedule.note}</p>
    </figure>
  );
}

export default Schedule;
