import React from 'react';
import './_styles.scss';
import { Link } from 'react-router-dom';
import Navigation from '../navigation';

function Header() {
  return (
    <header>
      <div className="header">
        <Link to={'/'}>
          <h1>Млекопитательница</h1>
        </Link>
        <h2>Построим вместе красивый храм в красивом месте!</h2>
      </div>
      <Navigation/>
    </header>
  );
}

export default Header;
