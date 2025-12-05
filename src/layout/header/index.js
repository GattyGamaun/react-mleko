import React from 'react';
import './_styles.scss';
import { Link } from 'react-router-dom';
import Navigation from '../navigation';
import data from '../../data/about.json';
import photo from './img/divider-top.png';

function Header() {
  return (
    <header>
      <div className="header">
        <div>
          <div className="header__info">{data.contacts.name.patriarhate}</div>
          <div className="header__info">{data.contacts.name.exarchate}</div>
          <div className="header__info">{data.contacts.name.global}</div>
          <div className="header__info">{data.contacts.name.episcopate}</div>
        </div>
        <img src={photo} alt="" />
        <div>
          <Link to={'/'}>
            <div className="header__subtitle">Приход храма иконы Божией Матери</div>
            <h1>"Млекопитательница"</h1>
          </Link>
          <div className="header__subtitle">д. Раубичи</div>
        </div>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
