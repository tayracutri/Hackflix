import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import InfiniteScroll from "react-infinite-scroll-component";
import StarRating from "./StarRating";
import { Navbar } from "react-bootstrap";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  // const [search, setSearch] = useState("");

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "3823fb8b06bcbb69d27ffe7192ef67e4";

  useEffect(() => {
    async function getMovies() {
      const data = await getData();
      setMovies([...movies, ...data.results]);
      setHasMore(page < data.total_pages);
    }
    getMovies();
  }, [page]);

  useEffect(() => {
    async function getRating() {
      setPage(1);
      const data = await getData();
      setMovies(data.results);
    }
    getRating();
  }, [rating]);

  async function getData(search) {
    const type = search ? "search" : "discover";
    const url = `${API_URL}/${type}/movie/?api_key=${API_KEY}&vote_average.gte=${
      rating * 2 - 2
    }&vote_count.gte=500&include_adult=false&page=${page}`;

    const response = await axios.get(url, {
      params: {
        query: search,
      },
    });
    return response.data;
  }

  // const searchMovies = (e) => {
  //   e.preventDefault();
  //   getData(search);
  // };
  return (
    <>
      <Navbar />
      <div>
        <StarRating rating={rating} setRating={setRating} />
        <InfiniteScroll
          dataLength={movies.length}
          hasMore={hasMore}
          next={() => setPage((prevPage) => prevPage + 1)}
        >
          <div className="movies-container">
            {movies.map((movie) => {
              return <Movie movie={movie} key={movie.id} />;
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Movies;
