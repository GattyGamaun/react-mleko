import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../data/about';
import VideoFrame from '../../components/video';

function Building() {
  return (
    <section>
      <VideoFrame />
      <section className="photo">
        <h4>2017</h4>
        <ul>
          <li className="photo-list">
            <NavLink to={'/2017/building/1'}>{links.building_1}</NavLink>
          </li>
          <li className="photo-list">
            <NavLink to={'/2017/building/2'}>{links.building_2}</NavLink>
          </li>
        </ul>
        <h4>2019</h4>
        <ul>
          <li className="photo-list">
            <NavLink to={'/2019/building/bells'}>{links.bells}</NavLink>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Building;
