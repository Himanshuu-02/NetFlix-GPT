import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import SecondaryContainer from "./LowerMainContainer";
import UpperMainContainer from "./UpperMainContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useToprateMovies from "../Hooks/useToprateMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => 
    store.gpt.showGptSearch
  );
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useToprateMovies();

  return (
    <div className="w-screen">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <UpperMainContainer />
          <SecondaryContainer />
        </>
      )}
     {!showGptSearch && <h1 className="bg-black flex justify-center items-center text-white ">Made by Himanshu ❤️
</h1>}
      {/*MainContainer
           -VideoBackground
           -VideoTitle
        SecondaryContainer
            -movieList *n
            -cards *n
       */}
    </div>
  );
};

export default Browse;
