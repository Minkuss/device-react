import React from "react";

import "./HomePageFooter.css";

export const HomePageFooter = () => (
  <footer className="home-page-footer">
    <nav className="home-page-footer__navigation">
      <a href="/">Войти</a>
      <a href="/">Сравнить</a>
      <a href="/">Корзина</a>
    </nav>
    <section className="home-page-footer__contacts">
      <h2 className="visually-hidden">Контактная информация</h2>
      <ul className="contacts-info-list">
        <li>г. Москва, ул. Строителей, 15</li>
        <li className="contacts-info-list__item">
          <a href="/">Доставка</a>
        </li>
        <li className="contacts-info-list__item">
          <a href="/">Гарантия</a>
        </li>
        <li className="contacts-info-list__item">
          <a href="/">Контакты</a>
        </li>
        <li className="contacts-info-list__item">
          Тел.: <a href="tel:+74954959595">+7 (495) 495-95-95</a>
        </li>
      </ul>
    </section>
    <section className="home-page-footer__social-networks">
      <h2 className="visually-hidden">Ссылки на социальные сети</h2>
      <ul className="social-networks-list">
        <li className="social-networks-list__item">
          <img src="assets/images/facebook.png" alt="Фейсбук" />
        </li>
        <li className="social-networks-list__item">
          <img src="assets/images/'instagram.png" alt="Инстаграмм" />
        </li>
        <li className="social-networks-list__item">
          <img src="assets/images/twitter.png" alt="Твитер" />
        </li>
      </ul>
    </section>
    <div className="home-page-footer__logo">
      <img src="assets/images/logo2.png" alt="Логотип мазагина Device" />
    </div>
  </footer>
);
