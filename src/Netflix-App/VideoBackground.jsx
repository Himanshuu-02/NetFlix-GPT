import React, { useEffect, useState } from "react";
import { movies_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";


const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  //fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      movies_API
    );
    const json = await data.json();
    // console.log(json)
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe
        className=" w-screen aspect-video min-h-[100vh]"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?si=y6HfINxxQRW0H5ai?&autoplay=1&mute=1&loop=1&controls=1"
        }
        frameborder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>

      {/* <iframe  className="w-screen aspect-video min-h-[100vh]"  src="https://www.youtube.com/embed/d9erkpdh5o0?si=y6HfINxxQRW0H5ai?&autoplay=1&mute=1&loop=1&controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    </div>
  );
};

export default VideoBackground;
