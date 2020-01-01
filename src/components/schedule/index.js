import React, { Component } from 'react';
import './_style.scss';
import { schedule } from '../../data/about';

class Schedule extends Component {
  state = {
    imageUrl: 'https://xn--80aanbnckgfdshn7bb2e5e.xn--90ais/assets/schedule-55.jpg',
  };

  render() {
    return (
      <figure>
        <figcaption>
          <h3>{schedule.title}</h3>
        </figcaption>
        <img src={this.state.imageUrl} alt="Расписание"/>
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

    return `Обновлено ${date} ${month} ${year}`;
  }
}

export default Schedule;
