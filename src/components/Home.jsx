import React from "react";
import Movies from "./Movies";
import { MoviesCarousel } from "./Carousel";

const Home = () => {
  return (
    <>
      <MoviesCarousel />
      <Movies />
    </>
  );
};

export default Home;
