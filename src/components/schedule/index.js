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
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `Сегодня ${date} ${month} ${year}`;
  }

  getDay() {
    let newDate = new Date();

    return newDate.getDate();
  }
}

export default Schedule;
