import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../data/about';
import './_style.scss';

function Photo() {
  return (
    <section className="photo">
      <h4>2018</h4>
      <ul>
        <li className="photo-list">
          <NavLink to={'/2018/christmas'}>
            {links.christmas}
          </NavLink>
        </li>
        <li className="photo-list">
          <NavLink to={'/2018/throne'}>
            {links.throne}
          </NavLink>
        </li>
        <li className="photo-list">
          <NavLink to={'/2018/trinity'}>
            {links.trinity}
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Photo;
