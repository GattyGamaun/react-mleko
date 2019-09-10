import React from 'react';
import './_style.scss';
import { NavLink } from 'react-router-dom';
import { contacts, links, mainLinks } from '../../data/about';

function Footer() {
  return (
    <footer>
      <div className="foot-wrap">
        <div className="foot-section contacts">
          <h5>{links.contacts}</h5>
          <address className="info">
            <a href={contacts.address.hrefs[0]}>
              {contacts.address.phones[0]}</a>
          </address>
          <address className="info">
            <a href={contacts.address.hrefs[1]}>
              {contacts.address.phones[1]}</a>
          </address>
          <address className="info">
            <a href={contacts.address.mail.mailto}>
              {contacts.address.mail.email}</a>
          </address>
          <address className="info">{contacts.address.region}</address>
          <address className="info">{contacts.address.street}</address>
          <address className="info">{contacts.address.bank.account}</address>
          <address className="info">{contacts.address.bank.code}</address>
        </div>
        <div className="foot-section center">
          <h5 className="foot-title">{contacts.name.title}</h5>
          <span className="info">{contacts.name.episcopate}</span>
          <span className="info">{contacts.name.exarchate}</span>
          <span className="info">{contacts.name.global}</span>
        </div>
        <div className="foot-section list">
          <h5>{links.title}</h5>
          <ul className="foot-links">
            {Object.entries(mainLinks).map(link => {
              return (<li className="info" key={link[0]}>
                <NavLink to={(link[0] === 'schedule') ? '/' : `/${link[0]}`}
                         activeStyle={{ fontWeight: 'bolder' }}>
                  {link[1]}
                </NavLink>
              </li>);
            })}
            <li>
              <a href={links.fb.href}
                 className="info"
                 target="_blank"
                 rel="noopener noreferrer">
                {links.fb.title}
              </a>
            </li>
            <li>
              <a href={links.insta.href}
                 className="info"
                 target="_blank"
                 rel="noopener noreferrer">
                {links.insta.title}
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <a href={contacts.developer.href}
             className="info"
             target="_blank"
             rel="noopener noreferrer">
            {contacts.developer.name} &copy;
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
