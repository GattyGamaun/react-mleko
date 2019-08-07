import React from 'react';
import './_Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="foot-wrap">
        <div className="foot-section contacts">
          <h5>Контакты</h5>
          <address className="info"><a href="tel:375296763677">тел: +375 29 676-36-77 (Velcom)</a></address>
          <address className="info"><a href="tel:375296949919">тел. священника: +375 29 694-99-19 (Velcom)</a></address>
          <address className="info"><a href="mailto:monalita25.01@gmail.com">e-mail: monalita25.01@gmail.com</a>
          </address>
          <address className="info">Минский район, д. Околица, 223005</address>
          <address className="info">ул. Шоссейная, 10</address>
          <address className="info">р/с BY34OLMP30150000014760000933</address>
          <address className="info">код банка: OLMPBY2X</address>
        </div>
        <div className="foot-section center">
          <h5 className="foot-title">Приход в честь иконы Божией Матери «Млекопитательница»</h5>
          <span className="info">Минская епархия</span>
          <span className="info">Белорусский Экзархат</span>
          <span className="info">Белорусская Православная Церковь</span>
        </div>
        <div className="foot-section list">
          <h5>Ссылки</h5>
          <ul className="foot-links">
            <li><Link to="/" className="info">Расписание</Link></li>
            <li><Link to="/photo" className="info">Фотогалерея</Link></li>
            <li><Link to="/building" className="info">Стройка</Link></li>
            <li><Link to="/contacts" className="info">Контакты</Link></li>
            <li><a href="https://www.facebook.com/Хроники-Крошечного-Храма-1661296960861607/?fref=ts" className="info"
                   target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/orthodox_raubichi/"
                   className="info" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>
            <a href="https://www.linkedin.com/in/sergey-kondratiuk-570a64116/"
               className="info" target="_blank" rel="noopener noreferrer">
              Разработал сайт Сергей Кондратюк &copy; 2017-2019</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
