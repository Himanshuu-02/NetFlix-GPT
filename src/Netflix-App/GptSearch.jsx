// 



//new

import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BgImg } from "../utils/constants";

const GptSearch = () => {
  const [movies, setMovies] = useState([]); // ✅ Shared state for results

  return (
    < >
      {/* Background */}
      <div className="min-w-full fixed -z-10">
        <img
          src={BgImg}
          alt="Bg-img"
          width="100%"
          className="h-screen object-cover"
        />
      </div>
    <div className="">
      {/* Search Bar */}
      <GptSearchBar setMovies={setMovies} />
      {/* Movie Suggestions */}
      <GptMovieSuggestion movies={movies} />

    </div>
      
    </>
  );
};

export default GptSearch;
