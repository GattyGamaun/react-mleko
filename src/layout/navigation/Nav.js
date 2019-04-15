import React from 'react';
import './Navigation.scss';
import Hamburger from '../../components/button-menu/Hamburger';

function Nav() {
  return (
    <nav className="menu">
      <Hamburger />
      <input type="checkbox" className="menu-toggle" id="menu-toggle" />
      <ul className="menu-list">
        <li className="menu-list-item"><a href="#">Расписание</a></li>
        <li className="menu-list-item"><a href="#">Фотогалерея</a></li>
        <li className="menu-list-item"><a href="#">Стройка</a></li>
        <li className="menu-list-item"><a href="#">Контакты</a></li>
      </ul>
    </nav>
  );
}

export default Nav;