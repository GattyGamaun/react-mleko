import React, { Component } from 'react';
import './_style.scss';
import { schedule } from '../../data/about';

class Schedule extends Component {
  render() {
    return (
      <figure>
        <figcaption>
          <h3>{schedule.title}</h3>
        </figcaption>
        <img src={`${schedule.url}?${this.getDay()}`} alt="Актуальное расписание в Viber в группе Млекопитательница" />
        <p>{schedule.note}</p>
        <p className="updated">{this.getDate()}</p>
      </figure>
    );
  }

  getDate() {
    const date = new Date();

    return `Сегодня ${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`;
  }

  getDay() {
    const date = new Date();
    return date.getDate();
  }
}

export default Schedule;
