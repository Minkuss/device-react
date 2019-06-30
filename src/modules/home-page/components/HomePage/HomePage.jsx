import React from "react";

import {
  HomePageAbout,
  HomePageCategories,
  HomePageFeaturedProducts,
  HomePageFooter,
  HomePageHeader,
  HomePageServices,
  HomePageSponsors
} from "../";

import "./HomePage.css";

export const HomePage = () => (
  <div className="home-page">
    <HomePageHeader />
    <main>
      <HomePageFeaturedProducts />
      <HomePageCategories />
      <HomePageServices />
      <HomePageSponsors />
      <HomePageAbout />
    </main>
    <HomePageFooter />
  </div>
);
