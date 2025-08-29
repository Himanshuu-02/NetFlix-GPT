// 



//new

import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BgImg } from "../utils/constants";

const GptSearch = () => {
  const [movies, setMovies] = useState([]); // ✅ Shared state for results

  return (
    <div className="items-center">
      {/* Background */}
      <div className="min-w-full fixed -z-10">
        <img
          src={BgImg}
          alt="Bg-img"
          width="100%"
          className="min-h-[100vh] max-w-[100%]"
        />
      </div>

      {/* Search Bar */}
      <GptSearchBar setMovies={setMovies} />
      {/* Movie Suggestions */}
      <GptMovieSuggestion movies={movies} />
    </div>
  );
};

export default GptSearch;
