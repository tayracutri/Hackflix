import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/MovieDetail.css";
import Footer from "./Footer";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=3823fb8b06bcbb69d27ffe7192ef67e4&language=en-US`,
      });
      setMovie(response.data);
    };
    getMovies();
  }, []);

  return (
    <div className="movie-container">
      <div className="container" style={{ marginBottom: "102px" }}>
        <div className="row">
          <div className="col">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="Movie Poster"
              className="movie-poster"
            />
          </div>
          <div className="col">
            <div className="info-container">
              <h1>{movie.title}</h1>
              <h4>{movie.overview}</h4>
              <div className="data-container">
                <p className="movie-text">
                  Votes count:
                  <span style={{ color: "#fff" }}> {movie.vote_count}</span>
                </p>
                <p className="movie-text">
                  Rating:
                  <span style={{ color: "#fff" }}>
                    {" "}
                    {movie.vote_average}
                  </span>{" "}
                </p>
                <p className="movie-text">
                  Original Language:{" "}
                  <span style={{ color: "#fff" }}>
                    {movie.original_language}
                  </span>
                </p>
                <p className="movie-text">
                  Release:
                  <span style={{ color: "#fff" }}> {movie.release_date}</span>
                </p>
              </div>
              <Link to="/" id="link">
                <button className="btn btn-outline-danger">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
