import React from "react";

import "./HomePageFeaturedProducts.css";

export const HomePageFeaturedProducts = () => (
  <section className="home-page-featured-products">
    <h2 className="visually-hidden">Избранные товары</h2>
    <div className="featured-product">
      <div className="characteristic">
        <h3 className="featured-product__name">
          Делай селфи, <br /> как Бен Стиллер!
        </h3>
        <p className="featured-product__description">
          Самая длинная палка для селфи доступна в нашем магазине. <br /> Восемь (Восемь, Карл!)
          метров длиной и весом всего 5 килограмм.
        </p>
        <div className="more-block">
          <a className="more" href="/">
            Подробнее
          </a>
        </div>
        <ul className="featured-product__characteristics">
          <li className="characteristic">
            <span className="characteristic__value">8,5 м</span>
            <span className="characteristic__name">Длина палки</span>
          </li>
          <li className="characteristic">
            <span className="characteristic__value">5 кг</span>
            <span className="characteristic__name">Вес палки</span>
          </li>
          <li className="characteristic">
            <span className="characteristic__value">Карбон</span>
            <span className="characteristic__name3">Материал</span>
          </li>
        </ul>
      </div>
      <img className="featured_product_image" src="assets/images/slider-1.png" alt="Селфи палка" />
    </div>
    <ol className="featured-slider__buttons">
      <li className="featured-slider__button">
        <button />
      </li>
      <li className="featured-slider__button">
        <button />
      </li>
      <li className="featured-slider__button">
        <button />
      </li>
    </ol>
  </section>
);
