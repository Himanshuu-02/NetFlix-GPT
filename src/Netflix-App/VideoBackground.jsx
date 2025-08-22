import React, { useEffect, useState } from "react";
import { movies_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
// import useTrailerVideo from "../Hooks/useTrailerVideo";

//fetch trailer video

// const VideoBackground = () => {
//   // const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

//   //here we use the custom hoook
//   //  useTrailerVideo(movieId);
//   // console.log(`trailer:${trailerVideo}`)
//   // const dispatch= useDispatch()
//   // // const [trailerId, setTrailerId]= useState(null)
//   //fetch trailer videos && updating the store with trailer

//   // const getMoviesVideos= async()=>{
//   //     const data= await fetch('https://api.themoviedb.org/3/movie/755898/videos?language=en-US', movies_API)
//   //     const json = await data.json();
//   //     console.log(json)
//   //     const trailer= json.results[0]
//   //     console.log(trailer)
//   //     // setTrailerId(trailer.key)
//   //     dispatch(addTrailerVideo(trailer))
//   // };
//   // useEffect(()=>{
//   //     getMoviesVideos();
//   // },[])

  

//   return (
//     <div>

//     </div>
//     // <div>
//     //   <iframe
//     //     className="w-screen aspect-video "
//     //     src={"https://www.youtube.com/embed/"+ trailerVideo.key+"?&autoplay=1&mute=1&controls=0&rel=0&loop=1"}
//     //     title="YouTube video player"
//     //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     //   ></iframe>
//     // </div>
    
//   );
// };

// export default VideoBackground;



const VideoBackground = ({movieId}) => {
  const dispatch= useDispatch()
  const trailerVideo= useSelector(store=> store.movies?.trailerVideo);

  //fetch trailer video
  const getMovieVideos= async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', movies_API)
    const json =await data.json();
    // console.log(json)
    const filterData =json.results.filter((video)=> video.type==="Trailer" )
    const trailer= filterData.length ? filterData[0]:json.results[0]
    // console.log(trailer);
     dispatch(addTrailerVideo(trailer))
  };
  useEffect(()=>{

    getMovieVideos();
  },[])
  return (
    <div>

      <iframe className=" w-full aspect-video min-h-[100vh]"
       src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=y6HfINxxQRW0H5ai?&autoplay=1&mute=1&loop=1&controls=1"} 
      
      title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>

      {/* <iframe  className="w-screen aspect-video"  src="https://www.youtube.com/embed/d9erkpdh5o0?si=y6HfINxxQRW0H5ai?&autoplay=1&mute=1&loop=1&controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    </div>
  )
}

export default VideoBackground
