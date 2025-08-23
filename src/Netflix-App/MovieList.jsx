// import React from "react";
// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   console.log(movies)
//   return (
//     <div>
//       <div>
//         <h1>{title}</h1>
//         <div>
//           <MovieCard posterPath={movies[0].poster_path} />

//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;


//new

// ...existing code...
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // Guard against null/undefined and non-array values
  if (!movies || !Array.isArray(movies) || movies.length === 0) {
    return (
      <div>
        <div>
          <h1>{title}</h1>
          <div className="text-white">Loading or no movies available.</div>
        </div>
      </div>
    );
  }
  return (
    <div className="px-6 ">
        <h1 className="text-3xl py-2 text-white" >{title}</h1>
      <div className="flex overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      
        <div className="flex">
          {movies.map((movie)=>  (<MovieCard key={movie.id} posterPath={movie.poster_path} />) )}
         
        </div>
      </div>
    </div>
  );
};

export default MovieList;
// ...existing code...
