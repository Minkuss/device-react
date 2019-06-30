import React from "react";

import "./HomePageAbout.css";

export const HomePageAbout = () => (
  <section className="home-page-about">
    <h2 className="visually-hidden">О нас</h2>
    <p>Огромный выбор гаджетов не оставит равнодушным гика, который есть в каждом из нас.</p>
    <p>
      Мы можем доставить ваш товар в самые отдаленные точки России! DEVICE работает со многими
      транспортными компаниями:
    </p>
    <ul className="delivery-option-list">
      <li className="delivery-option-list__item">
        <strong>ДеловыеЛинии</strong>
      </li>
      <li className="delivery-option-list__item">
        <strong>Авторейдинг</strong>
      </li>
      <li className="delivery-option-list__item">
        <strong>ЖелДорЭкспедиция</strong>
      </li>
    </ul>
    <a href="/">Подробнее о нас</a>
  </section>
);
