import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../../data/about.json';
import './_style.scss';

function Photo() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <section className="photo">
          <h4>2025</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2025/blessing'}>Освящение храма 13 июля 2025</NavLink>
            </li>
          </ul>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2025/kids'}>Ученики 1 класса школы Ихвис</NavLink>
            </li>
          </ul>

          <h4>2023</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2023/easter'}>{data.links.easter}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2023/ringer'}>{data.links.ringer}</NavLink>
            </li>
          </ul>

          <h4>2022</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2022/video/winter'}>{data.links.winterChurch}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2022/video/inner'}>{data.links.inner}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2022/tabynsk'}>{data.links.tabynsk}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2022/throne'}>{data.links.throne}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2022/easter'}>{data.links.easter}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2022/trinity'}>{data.links.trinity}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2022/pray'}>Литургия в новом храме</NavLink>
            </li>
          </ul>
        </section>
        <section className="photo">
          <h4>2021</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2021/trinity'}>{data.links.trinity}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2021/winter'}>{data.links.different}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2021/throne'}>{data.links.throne}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2021/easter'}>{data.links.easter}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2021/video/winter'}>{data.links.winterChurch}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2021/video/komelin'}>{data.links.komelin}</NavLink>
            </li>
          </ul>

          <h4>2020</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2020/different'}>{data.links.different}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2020/willow'}>{data.links.willow}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2020/easter'}>{data.links.easter}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2020/video/different'}>{data.links.different}</NavLink>
            </li>
          </ul>

          <h4>2019</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2019/different'}>{data.links.different}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2019/video/bells'}>{data.links.bells}</NavLink>
            </li>
          </ul>
        </section>
        <section className="photo">
          <h4>2018</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2018/christmas'}>{data.links.christmas}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2018/throne'}>{data.links.throne}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2018/trinity'}>{data.links.trinity}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2018/different'}>{data.links.different}</NavLink>
            </li>
          </ul>

          <h4>2017</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2017/video/1'}>{data.links.building_1}</NavLink>
            </li>
            <li className="photo-list">
              <NavLink to={'/2017/video/2'}>{data.links.building_2}</NavLink>
            </li>
          </ul>

          <h4>2016</h4>
          <ul>
            <li className="photo-list">
              <NavLink to={'/2016/different'}>Первое фото</NavLink>
            </li>
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Photo;
