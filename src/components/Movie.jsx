import React from "react";
import { Link } from "react-router-dom";
import "../styles/Movie.css";

const Movie = ({ movie }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <div className="movie-card">
          <img
            className="movie-img mt-2"
            src={`${IMAGE_URL}${movie.poster_path}`}
            alt="Movie Poster"
          />
        </div>
      </Link>
    </>
  );
};

export default Movie;
