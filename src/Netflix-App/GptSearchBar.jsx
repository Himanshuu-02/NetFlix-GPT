import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { movies_API } from "../utils/constants";
//import client from "../utils/openai";

const GptSearchBar = () => {
     const langKey= useSelector(store=> store.config.lang)
     const searchText= useRef(null)

     const searchMovieTMDB = async (movie)=>{
      const data = await fetch(

fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', movies_API)
      )
     }

     const handleSearchCLick=async ()=>{
        console.log(searchText.current.value);
        //make an API call to GPT API and get MOvie Results 
        //which is copy from the npm openAI platform
//         try{
//     const gptQuery= "Act as a Movie Recommandation system and suggest some movies for the query : " + searchText.current.value + ". only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay,Don,Golmaal,Weapons"
//     const gptResults=   await client.chat.completions.create({
//   model: 'gpt-3.5-turbo',
//   messages: [
//     { role: 'developer', content: gptQuery },
//     // { role: 'user', content: gptQuery },
//   ],
  
// });
// console.log(completion.choices[0].message.content);
//     }catch (error) {
//     alert("OpenAI API error: " + error.message);
//   }
  }

  return (
        
    <div className="pt-[10%] flex justify-center">
        <form className=" w-1/2 bg-black/80 grid grid-cols-12 " onSubmit={(e)=>e.preventDefault()}>
            <input type="text" className="p-4 m-4 bg-white col-span-9 rounded-r-lg" placeholder={lang[langKey].gptSearchPlaceholder} ref={searchText}/>
            <button type="submit" className="py-2 px-4 m-4 bg-red-700 text-white rounded-l-lg col-span-3 cursor-pointer hover:bg-red-900 text-bold text-lg" onClick={handleSearchCLick}>{lang[langKey].search} 🔍</button>
        </form>
    </div>
  );
};

export default GptSearchBar;






//new
// import React, { useRef, useState } from "react";
// import lang from "../utils/languageConstants";
// import { useSelector } from "react-redux";
// import { movies_API } from "../utils/constants";

// const GptSearchBar = () => {
//   const langKey = useSelector((store) => store.config.lang);
//   const searchText = useRef(null);
//   const [movies, setMovies] = useState([]);

//   // ✅ Fetch movies from TMDB
//   const searchMovieTMDB = async (query) => {
//     const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${movies_API}`;
//     const response = await fetch(url);
//     if (!response.ok) {
//       console.error("TMDB API Error:", response.status, response.statusText);
//       return [];
//     }
//     const data = await response.json();
//     return data.results || [];
//   };

//   // ✅ Handle search click
//   const handleSearchClick = async () => {
//     const query = searchText.current.value.trim();
//     if (!query) return;
//     const results = await searchMovieTMDB(query);
//     setMovies(results);
//   };

//   return (
//     <div className="pt-[5%] flex flex-col items-center">
//       {/* Search Bar */}
//       <form
//         className="w-1/2 bg-black/80 grid grid-cols-12 rounded-lg mt-30"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <input
//           type="text"
//           className="p-4 m-4 bg-white col-span-9 rounded-l-lg text-black"
//           placeholder={lang[langKey].gptSearchPlaceholder}
//           ref={searchText}
//         />
//         <button
//           type="submit"
//           className="py-2 px-4 m-4 bg-red-700 text-white rounded-r-lg col-span-3 cursor-pointer hover:bg-red-900 font-bold text-lg"
//           onClick={handleSearchClick}
//         >
//           {lang[langKey].search} 🔍
//         </button>
//       </form>

//       {/* Movie Results */}
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 px-6">
//         {movies.length > 0 ? (
//           movies.map((movie) => (
//             <div
//               key={movie.id}
//               className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300"
//             >
//               <img
//                 src={
//                   movie.poster_path
//                     ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
//                     : "https://via.placeholder.com/300x450?text=No+Image"
//                 }
//                 alt={movie.title}
//                 className="w-full h-80 object-cover"
//               />
//               <div className="p-3">
//                 <h3 className="text-lg font-bold">{movie.title}</h3>
//                 <p className="text-sm text-gray-400">
//                   {movie.release_date || "N/A"}
//                 </p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-white text-lg mt-6">
//             No movies found. Try another search!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GptSearchBar;

