import React from "react";

import "./HomePageHeader.css";

export const HomePageHeader = () => (
  <header className="home-page-header">
    <div className="home-page-header__logo">
      <img src="assets/images/logo.png" alt="Device Logo" />
    </div>
    <nav className="home-page-header__user-navigation">
      <input type="text" placeholder="Поиск по сайту" />
      <a href="/">Войти</a>
      <a href="/">Сравнить</a>
      <a href="/">Корзина</a>
    </nav>
    <nav className="home-page-header__main-navigation">
      <a href="/">Каталог товаров</a>
      <div>
        <a href="/">Виртуальная реальность</a>
        <a href="/">Моноподы для селфи</a>
        <a href="/">Экшн–камеры</a>
        <a href="/">Фитнес–браслеты</a>
        <a href="/">Умные часы</a>
        <a href="/">Квадрокоптеры</a>
      </div>
      <a href="/">Доставка</a>
      <a href="/">Гарантия</a>
      <a href="/">Контакты</a>
    </nav>
  </header>
);
