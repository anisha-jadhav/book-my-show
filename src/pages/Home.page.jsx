import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
// Layout HOC
import DefaultlayoutHoc from "../layout/Default.layout";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  // useEffect called first only when the page is loaded
  // i.e when page loads it will load all the movies requested bt axios
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");

      setRecommendedMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");

      setPremierMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestOnlineStreamingEvents = async () => {
      const getOnlineStreamingEvents = await axios.get("/movie/upcoming");

      setOnlineStreamEvents(getOnlineStreamingEvents.data.results);
    };

    requestOnlineStreamingEvents();
  }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container  mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
              alt="Rupay"
              className="w-full h-full"
            ></img>
          </div>
          <PosterSlider
            title="Premier Movies"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Online Streaming Events"
          subtitle=""
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultlayoutHoc(HomePage);
