import React from "react";

import "./HomePageHeader.css";

export const HomePageHeader = () => (
  <header className="home-page-header">
    <div className="container">
      <div className="home-page-header__logo">
        <img src="assets/images/logo.png" alt="Device Logo" />
      </div>
      <nav className="home-page-header__user-navigation">
        <input type="text" placeholder="Поиск по сайту" />
        <i className="fas fa-search" />
        <div className="navigation-wrapper">
          <i class="fas fa-user" />
          <a className="join" href="/">
            Войти
          </a>
          <a className="second-child" href="/">
            Сравнить
          </a>
          <i class="far fa-chart-bar" />
          <i class="fas fa-shopping-basket" />
          <a className="third-child" href="/">
            Корзина
          </a>
        </div>
      </nav>
      <nav className="home-page-header__main-navigation">
        <i class="fas fa-plus" />
        <a className="catalog" href="/">
          КАТАЛОГ ТОВАРОВ
        </a>
        <div className="catalog-list">
          <a href="/">Виртуальная реальность</a>
          <a href="/">Моноподы для селфи</a>
          <a href="/">Экшн–камеры</a>
          <a href="/">Фитнес–браслеты</a>
          <a href="/">Умные часы</a>
          <a href="/">Квадрокоптеры</a>
        </div>
        <div className="navigation-wrapper">
          <a className="first-child" href="/">
            ДОСТАВКА
          </a>
          <a className="second-child" href="/">
            ГАРАНТИЯ
          </a>
          <a className="third-child" href="/">
            КОНТАКТЫ
          </a>
        </div>
      </nav>
      <div className="dec">
        <span className="number">01</span>
        <span className="number2">02</span>
        <span className="number3">03</span>
      </div>
      <div className="dec2">
        <img className="child" src="assets/images/Layer 6.png" />
      </div>
    </div>
  </header>
);
