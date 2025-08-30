// // import React from 'react'
// // import { useSelector } from 'react-redux'
// // import MovieList from './MovieList';

// // const GptMovieSuggestion = () => {
// //   const {movieResults, movieNames}= useSelector((store)=>store.gpt);
// //   if(!movieNames) return null;


// //   return (
// //     <div className='m-4 p-4'>
// //       <div>
// //         {movieNames.map((movieName,index)=>{
// //           <MovieList
// //           key={movieName}
// //           title={movieName}
// //           movies={movieResults[index]}/>
// //         })}
// //       </div>
// //     </div>
    
// //   )
// // }

// // export default GptMovieSuggestion





//new
import React, { useState } from "react";
import { movies_API } from "../utils/constants";

const GptMovieSuggestion = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!movies || movies.length===0) {
    return (
      <p className="text-red-600 text-bold text-3xl text-center mt-6">
        No movies found. Try another search!
      </p>
    );
  }

  const fetchTrailer = async (movieId) => {
    // const API_KEY = movies_API; // Replace with your key
   const response = await fetch(
  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
  movies_API // This contains Authorization header
);
    const data = await response.json();
    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    if (trailer) {
      setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1`);
    } else {
      setTrailerUrl("");
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
    fetchTrailer(movie.id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
    setTrailerUrl("");
  };

  return (
    <div className=" p-3">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 px-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => handleMovieClick(movie)}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : "https://cdn.displate.com/artwork/270x380/2024-09-27/698278bd-0e81-489e-816e-a1ecef2bb517.jpg"
              }
              alt={movie.title}
              className="w-full  h-50 md:h-80 object-cover"
            />
            <div className="p-[3px] md:p-[5px]">
              <h3 className="text-lg font-bold">{movie.title}</h3>
              <p className="text-sm text-gray-400">
                {movie.release_date || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedMovie && (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white p-4 rounded-lg max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-4 text-white text-2xl cursor-pointer"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedMovie.title}</h2>
            <p className="mb-4 text-gray-300">{selectedMovie.overview}</p>
            {trailerUrl ? (
              <iframe
                width="100%"
                height="400"
                src={trailerUrl}
                title="Trailer"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <p className="text-red-700 font-bold">Trailer not available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GptMovieSuggestion;
