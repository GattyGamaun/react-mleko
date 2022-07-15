import React from 'react';
import { NavLink } from 'react-router-dom';
import './_style.scss';
import { links } from '../../data/about';
import VideoFrame from '../../components/video';

function Building() {
  return (
    <React.Fragment>
      <div class="building">
        <section className="photo">
          <ul>
            <li className="photo-list">
              <NavLink to={'/2021/building/komelin'}>{links.komelin}</NavLink>
            </li>
          </ul>
          <h4>2022</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2022/building/inner'}>{links.inner}</NavLink>
            </li>
          </ul>
          <h4>2021</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2021/building/winter'}>{links.winterChurch}</NavLink>
            </li>
          </ul>
          <h4>2020</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2020/building/different'}>{links.different}</NavLink>
            </li>
          </ul>
          <h4>2019</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2019/building/bells'}>{links.bells}</NavLink>
            </li>
          </ul>
          <h4>2017</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2017/building/1'}>{links.building_1}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2017/building/2'}>{links.building_2}</NavLink>
            </li>
          </ul>
        </section>
        <VideoFrame />
      </div>
    </React.Fragment>
  );
}

export default Building;
