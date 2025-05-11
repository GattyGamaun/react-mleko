import React, { Component } from 'react';
import './_style.scss';
import data from '../../data/about.json';

class Schedule extends Component {
  date = new Date();

  render() {
    return (
      <figure>
        <figcaption>
          <h3>{data.schedule.title}</h3>
        </figcaption>
        <img
          src={`${data.schedule.url}?${this.getDay()}`}
          alt="Актуальное расписание в Viber в группе Млекопитательница"
        />
        <p>{data.schedule.note}</p>
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
