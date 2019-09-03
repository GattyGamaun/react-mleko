import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../data/about';


function Building() {
  return (
    <section className="photo">
      <h4>2017</h4>
      <ul>
        <li className="photo-list">
          <NavLink to={'/2017/building/1'}>
            {links.building_1}
          </NavLink>
        </li>
        <li className="photo-list">
          <NavLink to={'/2017/building/2'}>
            {links.building_2}
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Building;
