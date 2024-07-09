import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-32 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.nowPopularMovies} />
          <MovieList title={"Top Rated"} movies={movies.nowTopRatedMovies} />
          <MovieList title={"Up Coming"} movies={movies.nowUpComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
