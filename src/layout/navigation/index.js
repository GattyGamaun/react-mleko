import React, { Component } from 'react';
import './_styles.scss';
import { NavLink } from 'react-router-dom';
import data from '../../data/about.json';

class Navigation extends Component {
  state = {
    isToggleOn: true,
  };

  handleMenuOpen = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  render() {
    return (
      <nav className="menu">
        <button
          className={this.state.isToggleOn ? 'hamburger' : 'hamburger is-active'}
          type="button"
          id="menu-toggle"
          onClick={this.handleMenuOpen}
        >
          {this.state.isToggleOn ? '☰' : '✕'}
        </button>
        <ul className={this.state.isToggleOn ? 'menu-list' : 'menu-list is-active'}>
          {Object.entries(data.mainLinks).map((link) => {
            return (
              <li className="menu-list-item" key={link[0]}>
                <NavLink to={link[0] === 'schedule' ? '/' : `/${link[0]}`} onClick={this.handleMenuOpen}>
                  {link[1]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
