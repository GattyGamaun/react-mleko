import React from 'react';
import './_style.scss';
import data from '../../data/about.json';

function WorkingHours() {
  return (
    <article>
      <h3>{data.workingHours.title}</h3>
      <p className="days">{data.workingHours.days}</p>
      <p className="hours">{data.workingHours.hours}</p>
    </article>
  );
}

export default WorkingHours;
