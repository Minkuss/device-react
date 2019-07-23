import React from "react";

import "./HomePageCategories.css";

export const HomePageCategories = () => (
  <section className="home-page-categories">
    <ul className="categories-list">
      <li className="categories-list__item">
        <a className="image1" href="/">
          <img src="assets/images/popular-1.png" alt="Виртуальная реальность" />
        </a>
        <a className="name" href="/">
          Виртуальная <br /> реальность
        </a>
      </li>
      <li className="categories-list__item">
        <a className="image2" href="/">
          <img src="assets/images/popular-2.png" alt="Моноподы для селфи" />
        </a>
        <a className="name" href="/">
          Моноподы <br /> для селфи
        </a>
      </li>
      <li className="categories-list__item">
        <a className="image3" href="/">
          <img src="assets/images/popular-3.png" alt="Экшн–камеры" />
        </a>
        <a className="name" href="/">
          Экшн–камеры
        </a>
      </li>
      <li className="categories-list__item">
        <a className="image4" href="/">
          <img src="assets/images/popular-4.png" alt="Фитнес–браслеты" />
        </a>
        <a className="name" href="/">
          Фитнес–браслеты
        </a>
      </li>
      <li className="categories-list__item">
        <a className="image5" href="/">
          <img src="assets/images/popular-5.png" alt="Умные часы" />
        </a>
        <a className="name" href="/">
          Умные часы
        </a>
      </li>
      <li className="categories-list__item">
        <a className="image6" href="/">
          <img src="assets/images/poppular-6.png" alt="Квадрокоптеры" />
        </a>
        <a className="name" href="/">
          Квадрокоптеры
        </a>
      </li>
    </ul>
  </section>
);
