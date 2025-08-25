import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { movies_API } from "../utils/constants";

const useUpcomingMovies=()=>{
    //fetch data from TMDB API and update store
   
    const dispatch= useDispatch()
  const getUpcomingMovies= async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', movies_API)
    const json= await data.json()
    //  console.log(`upcoming:${json.results}`);
    dispatch(addUpcomingMovies(json.results || []))
  };
  useEffect(()=>{
    getUpcomingMovies()

  },[])
}

export default useUpcomingMovies