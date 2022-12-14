import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import InfiniteScroll from "react-infinite-scroll-component";
import StarRating from "./StarRating";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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

  async function getData() {
    const url = ` https://api.themoviedb.org/3/discover/movie/?api_key=3823fb8b06bcbb69d27ffe7192ef67e4&vote_average.gte=${
      rating * 2 - 2
    }&vote_count.gte=500&include_adult=false&page=${page}`;

    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  }

  return (
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
  );
};

export default Movies;
