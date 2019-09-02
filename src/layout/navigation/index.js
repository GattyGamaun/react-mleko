import React, { Component } from 'react';
import './_styles.scss';
import { NavLink } from 'react-router-dom';
import { links } from '../../data/about';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <nav className="menu">
        <button className={(this.state.isToggleOn) ? 'hamburger hamburger--3dy' : 'hamburger hamburger--3dy is-active'}
                type="button"
                id="menu-toggle"
                onClick={this.handleClick}>
          <span className="hamburger-box">
            <span className="hamburger-inner"/>
          </span>
        </button>
        <ul className={this.state.isToggleOn ? 'menu-list' : 'menu-list is-active'}>
          <li className="menu-list-item">
            <NavLink to="/" activeStyle={{ fontWeight: 'bolder' }}>
              {links.schedule}
            </NavLink>
          </li>
          <li className="menu-list-item">
            <NavLink to="/photo" activeStyle={{ fontWeight: 'bolder' }}>
              {links.gallery}
            </NavLink>
          </li>
          <li className="menu-list-item">
            <NavLink to="/building" activeStyle={{ fontWeight: 'bolder' }}>
              {links.building}
            </NavLink>
          </li>
          <li className="menu-list-item">
            <NavLink to="/contacts" activeStyle={{ fontWeight: 'bolder' }}>
              {links.area}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
