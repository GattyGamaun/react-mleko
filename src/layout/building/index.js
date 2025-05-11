import React from 'react';
import { NavLink } from 'react-router-dom';
import './_style.scss';
import data from '../../data/about.json';
import VideoFrame from '../../components/video';

function Building() {
  return (
    <React.Fragment>
      <div className="building">
        <section className="photo">
          <ul>
            <li className="photo-list">
              <NavLink to={'/2021/building/komelin'}>{data.links.komelin}</NavLink>
            </li>
          </ul>
          <h4>2023</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2023/ringer'}>{data.links.ringer}</NavLink>
            </li>
          </ul>
          <h4>2022</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2022/building/winter'}>{data.links.winterChurch}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2022/building/inner'}>{data.links.inner}</NavLink>
            </li>
          </ul>
          <h4>2021</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2021/building/winter'}>{data.links.winterChurch}</NavLink>
            </li>
          </ul>
          <h4>2020</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2020/building/different'}>{data.links.different}</NavLink>
            </li>
          </ul>
          <h4>2019</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2019/building/bells'}>{data.links.bells}</NavLink>
            </li>
          </ul>
          <h4>2017</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2017/building/1'}>{data.links.building_1}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2017/building/2'}>{data.links.building_2}</NavLink>
            </li>
          </ul>
        </section>
        <VideoFrame />
      </div>
    </React.Fragment>
  );
}

export default Building;
