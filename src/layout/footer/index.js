import React from 'react';
import './_style.scss';
import { NavLink } from 'react-router-dom';
import data from '../../data/about.json';

function Footer() {
  function copy(text) {
    if ('clipboard' in navigator) {
      navigator.clipboard.writeText(text).then(() => {
        alert('Скопировано!');
      });
    }
  }
  return (
    <footer>
      <div className="foot-wrap">
        <div className="foot-section contacts">
          <h5>{data.links.contacts}</h5>
          <address className="info">
            <a href={data.contacts.address.hrefs[0]}>{data.contacts.address.phones[0]}</a>
          </address>
          <address className="info">
            <a href={data.contacts.address.hrefs[1]}>{data.contacts.address.phones[1]}</a>
          </address>
          <address className="info">
            <a href={data.contacts.address.mail.mailto}>{data.contacts.address.mail.email}</a>
          </address>
          <address className="info">{data.contacts.address.region}</address>
          <address className="info">{data.contacts.address.street}</address>
          <div className="f-center gap-025">
            <address>р/с {data.contacts.address.bank.account}</address>
            <button type="button" className="copy" onClick={() => copy(data.contacts.address.bank.account)}>
              Копировать
            </button>
          </div>
          <div className="f-center gap-025">
            <address>код банка (БИК) {data.contacts.address.bank.code}</address>
            <button type="button" className="copy" onClick={() => copy(data.contacts.address.bank.code)}>
              Копировать
            </button>
          </div>
          <div className="f-center gap-025">
            <address>УНП {data.contacts.address.bank.unp}</address>
            <button type="button" className="copy" onClick={() => copy(data.contacts.address.bank.unp)}>
              Копировать
            </button>
          </div>
        </div>
        <div className="foot-section center">
          <h5 className="foot-title">{data.contacts.name.title}</h5>
          <span className="info">{data.contacts.name.episcopate}</span>
          <span className="info">{data.contacts.name.exarchate}</span>
          <span className="info">{data.contacts.name.global}</span>
        </div>
        <div className="foot-section list">
          <h5>{data.links.title}</h5>
          <ul className="foot-links gap-1">
            {Object.entries(data.mainLinks).map((link) => {
              return (
                <li className="info" key={link[0]}>
                  <NavLink to={link[0] === 'schedule' ? '/' : `/${link[0]}`}>{link[1]}</NavLink>
                </li>
              );
            })}
            <li>
              <a href={data.links.ya.href} className="info" target="_blank" rel="noopener noreferrer">
                {data.links.ya.title}
              </a>
            </li>
            <li>
              <a href={data.links.googlemap.href} className="info" target="_blank" rel="noopener noreferrer">
                {data.links.googlemap.title}
              </a>
            </li>
            <li>
              <a href={data.links.insta.href} className="info" target="_blank" rel="noopener noreferrer">
                {data.links.insta.title}
              </a>
            </li>
            <li>
              <a href={data.links.fb.href} className="info" target="_blank" rel="noopener noreferrer">
                {data.links.fb.title}
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <a href={data.contacts.developer.href} className="info" target="_blank" rel="noopener noreferrer">
            {data.contacts.developer.name} &copy;
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
