import React, { Component } from 'react';
import './_style.scss';
import data from '../../data/about.json';

class WorkingHours extends Component {
  render() {
    return (
      <article>
        <h3>{data.workingHours.title}</h3>
        <p className="days">{data.workingHours.days}</p>
        <p className="hours">{data.workingHours.hours}</p>
      </article>
    );
  }
}

export default WorkingHours;
