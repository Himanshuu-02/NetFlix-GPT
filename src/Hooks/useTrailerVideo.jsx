// import { useDispatch } from "react-redux";
// import { addTrailerVideo } from "../utils/moviesSlice";
// import { useEffect } from "react";
// import { movies_API } from "../utils/constants";

// const useTrailerVideo=(movieId)=>{
//     //hook for trailer video
//         // const [trailerId, setTrailerId]= useState(null)
//         const dispatch= useDispatch()
//         // const getMoviesVideos= async()=>{
//         //     const data= await fetch("https://api.themoviedb.org/3/movie/" +movieId+ "/videos?language=en-US", movies_API)
//         //     const json = await data.json();
//         //     console.log(json)
//         //     const trailer= json.results[0]
//         //     console.log(trailer)
//         //     // setTrailerId(trailer.key)
//         //     dispatch(addTrailerVideo(trailer))
//         // };


//         //new
//         const getMoviesVideos = async () => {
//   const data = await fetch(
//     "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
//     movies_API
//   );
//   const json = await data.json();
//   console.log(json);

//   if (!json.results || json.results.length === 0) {
//     console.warn("No videos found for this movie");
//     dispatch(addTrailerVideo(null));
//     return;
//   }

//   // Prefer trailer over teaser
//   const trailer = json.results.find(video => video.type === "Trailer") || json.results[0];
//   console.log(trailer);
  
//   dispatch(addTrailerVideo(trailer));
// };

//         useEffect(()=>{
//             getMoviesVideos();
//         },[movieId])

// }
// export default useTrailerVideo