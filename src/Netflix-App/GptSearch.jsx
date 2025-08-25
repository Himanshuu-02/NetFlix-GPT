import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BgImg } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className='items-center'>
        {/* two comoponent we made gptSearchBar
        and GptMovies Suggestion */}
        <div className="min-w-full  absolute -z-20">
                <img
                  src={BgImg}
                  alt="Bg-img"
                  width="100%"
                 
                  className="min-h-[100vh] mx-w-[100%]"
                />
              </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}
export default GptSearch