import React from 'react';
import './_style.scss';
import data from '../../data/about.json';

const Schedule = () => {
  const date = new Date();

  const getDate = () => {
    return `Сегодня ${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`;
  };

  const getDay = () => {
    return getDate();
  };

  return (
    <figure>
      <figcaption>
        <h3>{data.schedule.title}</h3>
      </figcaption>
      <img src={`${data.schedule.url}?${getDay()}`} alt="Актуальное расписание в Viber в группе Млекопитательница" />
      <p>{data.schedule.note}</p>
      <p className="updated">{getDate()}</p>
    </figure>
  );
};

export default Schedule;
