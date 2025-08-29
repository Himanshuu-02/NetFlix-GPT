// import React, { useRef } from "react";
// import lang from "../utils/languageConstants";
// import { useDispatch, useSelector } from "react-redux";
// import { movies_API } from "../utils/constants";
// import client from "../utils/openai";
// import { addGptMovieResult } from "../utils/gptSlice";

// const GptSearchBar = () => {
//   const dispatch= useDispatch()
//      const langKey= useSelector(store=> store.config.lang)
//      const searchText= useRef(null)

//      const searchMovieTMDB = async (movie)=>{
//       const data = await fetch(

// fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', movies_API)
//       )
//       const json= await data.json()
//       return json.results;
//      }

//      const handleSearchCLick=async ()=>{
//         console.log(searchText.current.value);
//         // make an API call to GPT API and get MOvie Results 
//         // which is copy from the npm openAI platform
//         try{
//     const gptQuery= "Act as a Movie Recommandation system and suggest some movies for the query : " + searchText.current.value + ". only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay,Don,Golmaal,Weapons"
//     const gptResults=   await client.chat.completions.create({
//   model: 'gpt-3.5-turbo',
//   messages: [
//     // { role: 'developer', content: gptQuery },
//     { role: 'user', content: gptQuery },
//   ],
  
// });
// console.log(gptResults.choices?.[0]?.message?.content);
// const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
// //iske baad array k andr string bnjaegi

// //for each movie i will search tmdb api
// const promiseArray= gptMovies.map(movie=>searchMovieTMDB(movie));
// //[promise,promise,promise,promise,promise]
// const tmdbResults= await Promise.all(promiseArray)

// console.log(tmdbResults);
// dispatch(addGptMovieResult(tmdbResults))
//     }catch (error) {
//     alert("OpenAI API error: " + error.message);
//   }
//   }

//   return (
        
//     <div className="pt-[10%] flex justify-center">
//         <form className=" w-1/2 bg-black/80 grid grid-cols-12 " onSubmit={(e)=>e.preventDefault()}>
//             <input type="text" className="p-4 m-4 bg-white col-span-9 rounded-r-lg" placeholder={lang[langKey].gptSearchPlaceholder} ref={searchText}/>
//             <button type="submit" className="py-2 px-4 m-4 bg-red-700 text-white rounded-l-lg col-span-3 cursor-pointer hover:bg-red-900 text-bold text-lg" onClick={handleSearchCLick}>{lang[langKey].search} 🔍</button>
//         </form>
//     </div>
//   );  
// };

// export default GptSearchBar;



//new

import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { movies_API } from "../utils/constants";

const GptSearchBar = ({ setMovies }) => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // ✅ Fetch movies from TMDB
  const searchMovieTMDB = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=1`;
    try {
      const response = await fetch(url, movies_API);
      if (!response.ok) {
        console.error("TMDB API Error:", response.status, response.statusText);
        return [];
      }
      const data = await response.json();
      console.log(data)
      return data.results || [];
    } catch (error) {
      console.error("Error fetching TMDB:", error);
      return [];
    }
  };

  // ✅ Handle Search Click
  const handleSearchClick = async () => {
    const query = searchText.current.value.trim();
    if (!query) return;
    const results = await searchMovieTMDB(query);
    setMovies(results);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black/80 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 bg-white col-span-9 rounded-l-lg text-black"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          type="submit"
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-r-lg col-span-3 cursor-pointer hover:bg-red-900 font-bold text-lg"
          onClick={handleSearchClick}
        >
          {lang[langKey].search} 🔍
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;


