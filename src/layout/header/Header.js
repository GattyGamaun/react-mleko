import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to={'/'}>
        <h1>Млекопитательница</h1>
      </Link>
      <h2>Построим вместе красивый храм в красивом месте!</h2>
    </header>
  );
}

export default Header;
