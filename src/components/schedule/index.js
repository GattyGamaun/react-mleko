import React, { Component } from 'react';
import './_style.scss';
import { schedule } from '../../data/about';

class Schedule extends Component {
  date = new Date();

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
    return `Сегодня ${this.date.getDate()} ${this.date.getMonth() + 1} ${this.date.getFullYear()}`;
  }

  getDay() {
    return this.getDate();
  }
}

export default Schedule;
