import React, {Component} from 'react';
import './_style.scss';
import {schedule} from '../../data/about';

class Schedule extends Component {
  state = {
    imageUrl: 'http://xn--80aanbnckgfdshn7bb2e5e.xn--90ais/assets/schedule-40.jpg',
  };

  render() {
    return (
      <figure>
        <figcaption>
          <h3>{schedule.title}</h3>
        </figcaption>
        <img src={this.state.imageUrl} alt="Расписание"/>
        <p>{schedule.note}</p>
        <p className="updated">{schedule.updated}</p>
      </figure>
    );
  }
}

export default Schedule;
