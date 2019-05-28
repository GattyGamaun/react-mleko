import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="foot-wrap">
        <div className="foot-section">
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
          <h5>Приход в честь иконы Божией Матери «Млекопитательница»</h5>
          <img src="./assets/img/divider-white.png" alt="" />
            <span className="info">Минская епархия</span>
            <span className="info">Белорусский Экзархат</span>
            <span className="info">Белорусская Православная Церковь</span>
        </div>
        <div className="foot-section links">
          <h5>Ссылки</h5>
          <ul>
            <li><a href="./" className="info">Расписание</a></li>
            <li><a href="#" className="info">Фотогалерея</a></li>
            <li><a href="#" className="info">Стройка</a></li>
            <li><a href="#" className="info">Контакты</a></li>
            <li><a href="https://www.facebook.com/Хроники-Крошечного-Храма-1661296960861607/?fref=ts" className="info"
                   target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/orthodox_raubichi/"
                   className="info" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Разработал сайт
          <a href="https://jobs.tut.by/resume/e749d7cbff03a0e7ab0039ed1f706478443256?customDomain=1"
             className="info" target="_blank" rel="noopener noreferrer">Сергей Кондратюк</a>
          &copy; 2017-2019
        </p>
      </div>
    </footer>
  )
}

export default Footer;
