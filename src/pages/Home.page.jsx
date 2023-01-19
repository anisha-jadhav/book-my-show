import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
// Layout HOC
import DefaultLayoutHoc from "../layout/Default.layout";

const HomePage = () => {
  return <div>HomePage</div>;
};

export default DefaultLayoutHoc(HomePage);
