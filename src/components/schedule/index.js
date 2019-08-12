import React from 'react';
import './_style.scss';
import schedule from './img/schedule.png';

function Schedule() {
  return (
    <figure>
      <figcaption>
        <h3>Расписание богослужений</h3>
      </figcaption>
      <img src={schedule} alt="Расписание"/>
    </figure>
  );
}

export default Schedule;
