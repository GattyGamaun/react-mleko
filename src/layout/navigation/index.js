import React, { useState } from 'react';
import './_styles.scss';
import { NavLink } from 'react-router-dom';
import data from '../../data/about.json';

const Navigation = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleMenuOpen = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <nav className="menu">
      <button
        className={isToggleOn ? 'hamburger' : 'hamburger is-active'}
        type="button"
        id="menu-toggle"
        onClick={handleMenuOpen}
      >
        {isToggleOn ? '☰' : '✕'}
      </button>
      <ul className={isToggleOn ? 'menu-list' : 'menu-list is-active'}>
        {Object.entries(data.mainLinks).map((link) => {
          return (
            <li className="menu-list-item" key={link[0]}>
              <NavLink to={link[0] === 'schedule' ? '/' : `/${link[0]}`} onClick={handleMenuOpen}>
                {link[1]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
