import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
//here i give the video title and background video items
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    // movielist- popular
    // movielist- now playing
    // movielist- trending
    // movielist- filter
    movies && (
      <div className=" bg-black">
        <div className="-mt-59 relative pl-5 z-22">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies?.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies?.topRatedMovies} />
          <MovieList title={"Shows"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
          <MovieList title={"Comedy"} movies={movies?.popularMovies} />
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies?.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies?.topRatedMovies} />
          <MovieList title={"Shows"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
          <MovieList title={"Comedy"} movies={movies?.popularMovies} />
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies?.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies?.topRatedMovies} />
          <MovieList title={"Shows"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
          <MovieList title={"Comedy"} movies={movies?.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
