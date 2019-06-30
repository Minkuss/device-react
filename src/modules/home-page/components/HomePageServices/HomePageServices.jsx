import React from "react";

import "./HomePageServices.css";

export const HomePageServices = () => (
  <section className="home-page-services">
    <h2>Услуги</h2>
    <ul className="service-list">
      <li className="service-list__item">
        <h3>Доставка</h3>
        <button>Доставка</button>
        <p>
          Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь
          мы неплохо заработаем, поднимая его на ваш этаж.
        </p>
        <img src="assets/images/delivery.png" alt="Доставка" />
      </li>
      <li className="service-list__item">
        <h3>Гарантия</h3>
        <button>Гарантия</button>
        <p className="text-about">
          Если из-за возгорания купленного у нас товара у вас сгорит дом — не переживайте, мы
          выдадим вам новый. Товар, не дом, конечно же.
        </p>
        <img src="assets/images/warranty.png" alt="Гарантия" />
        <br />
      </li>
      <li className="service-list__item">
        <h3>Кредит</h3>
        <button>Кредит</button>
        <p className="text-about">
          Залезть в долговую яму стало проще! Кредитные консультанты подберут для вас наиболее
          выгодные условия кредита. Выгодные для нашего банка, разумеется.
        </p>
        <img src="assets/images/credit.png" alt="Кредит" />
      </li>
    </ul>
  </section>
);
