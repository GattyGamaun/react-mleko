import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../data/about.json';
import './_style.scss';

function Photo() {
  return (
    <React.Fragment>
      <section className="photo">
        <h4>2023</h4>
        <ul>
          <li className="photo-list">
            <NavLink to={'/2023/easter'}>{links.easter}</NavLink>
          </li>
        </ul>
      </section>
      <section className="photo">
        <h4>2022</h4>
        <ul>
          <li className="photo-list">
            <NavLink to={'/2022/tabynsk'}>{links.tabynsk}</NavLink>
          </li>
          <li className="photo-list">
            <NavLink to={'/2022/throne'}>{links.throne}</NavLink>
          </li>
          <li className="photo-list">
            <NavLink to={'/2022/easter'}>{links.easter}</NavLink>
          </li>
          <li className="photo-list">
            <NavLink to={'/2022/trinity'}>{links.trinity}</NavLink>
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
            <NavLink to={'/2021/trinity'}>{links.trinity}</NavLink>
          </li>
          <li className="photo-list">
            <NavLink to={'/2021/winter'}>{links.different}</NavLink>
          </li>
          <li className="photo-list">
            <NavLink to={'/2021/throne'}>{links.throne}</NavLink>
          </li>
          <li className="photo-list">
            <NavLink to={'/2021/easter'}>{links.easter}</NavLink>
          </li>
        </ul>
      </section>
      <section className="photo">
        <h4>2020</h4>
        <ul>
          <li className="photo-list">
            <NavLink to={'/2020/different'}>{links.different}</NavLink>
          </li>
          <li className="photo-list">
            <NavLink to={'/2020/willow'}>{links.willow}</NavLink>
          </li>
          <li className="photo-list">
            <NavLink to={'/2020/easter'}>{links.easter}</NavLink>
          </li>
        </ul>
      </section>
      <section className="photo">
        <h4>2019</h4>
        <ul>
          <li className="photo-list">
            <NavLink to={'/2019/different'}>{links.different}</NavLink>
          </li>
        </ul>
      </section>
      <section className="photo">
        <h4>2018</h4>
        <ul>
          <li className="photo-list">
            <NavLink to={'/2018/christmas'}>{links.christmas}</NavLink>
          </li>
          <li className="photo-list">
            <NavLink to={'/2018/throne'}>{links.throne}</NavLink>
          </li>
          <li className="photo-list">
            <NavLink to={'/2018/trinity'}>{links.trinity}</NavLink>
          </li>
          <li className="photo-list">
            <NavLink to={'/2018/different'}>{links.different}</NavLink>
          </li>
        </ul>
      </section>
      <section className="photo">
        <h4>2016</h4>
        <ul>
          <li className="photo-list">
            <NavLink to={'/2016/different'}>Первое фото</NavLink>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Photo;
