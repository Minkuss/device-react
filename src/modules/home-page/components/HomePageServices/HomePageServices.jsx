import React from "react";

import "./HomePageServices.css";

export const HomePageServices = () => (
  <section className="home-page-services">
    <h2>Услуги</h2>
    <ul className="service-list">
      <li className="service-list__item">
        <button>Доставка</button>
        <h3 className="h3-1">Доставка</h3>
        <p className="p1">
          Мы с удовольствием доставим ваш товар прямо к вашему <br /> подъезду совершенно бесплатно!
          Ведь мы неплохо <br /> заработаем, поднимая его на ваш этаж.
        </p>
        <img className="img1" src="assets/images/delivery.png" alt="Доставка" />
      </li>
      <li className="service-list__item">
        <button>Гарантия</button>
        <h3 className="h3-2">Гарантия</h3>
        <p className="p2">
          Если из-за возгорания купленного у нас товара у вас сгорит <br /> дом — не переживайте, мы
          выдадим вам новый. <br /> Товар, не дом, конечно же.
        </p>
        <img className="img2" src="assets/images/warranty.png" alt="Гарантия" />
        <br />
      </li>
      <li className="service-list__item">
        <button>Кредит</button>
        <h3 className="h3-3">Кредит</h3>
        <p className="p3">
          Залезть в долговую яму стало проще! Кредитные <br /> консультанты подберут для вас
          наиболее выгодные <br /> условия кредита. Выгодные для нашего банка, разумеется.
        </p>
        <img className="img3" src="assets/images/credit.png" alt="Кредит" />
      </li>
    </ul>
  </section>
);
