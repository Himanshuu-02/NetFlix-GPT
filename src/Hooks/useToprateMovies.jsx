
import { useDispatch, useSelector } from "react-redux";
import {   addToprateMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { movies_API } from "../utils/constants";

const useToprateMovies=()=>{
    //fetch data from TMDB API and update store
   
    const dispatch= useDispatch()
  const getToprateMovies= async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1'
, movies_API)
    const json= await data.json()
    // console.log(json.results);
    dispatch(addToprateMovies(json.results))
  };
  useEffect(()=>{
    getToprateMovies()

  },[])
}

export default useToprateMovies