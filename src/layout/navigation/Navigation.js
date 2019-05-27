import React, { Component } from 'react';
import './Navigation.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <nav className="menu">
        <button className={(this.state.isToggleOn) ? "hamburger hamburger--3dy" : "hamburger hamburger--3dy is-active"}
                type="button"
                id="menu-toggle"
                onClick={this.handleClick}>
          <span className="hamburger-box">
            <span className="hamburger-inner"/>
          </span>
        </button>
        <ul className={this.state.isToggleOn ? "menu-list" : "menu-list is-active"}>
          <li className="menu-list-item"><a href="#">Расписание</a></li>
          <li className="menu-list-item"><a href="#">Фотогалерея</a></li>
          <li className="menu-list-item"><a href="#">Стройка</a></li>
          <li className="menu-list-item"><a href="#">Контакты</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
