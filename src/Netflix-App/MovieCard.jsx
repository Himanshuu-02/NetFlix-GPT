import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  // const src= `${IMG_CDN_URL}${posterPath}`
  // console.log(posterPath)
  return (
    <div className='w-49 pr-5 rounded-lg cursor-pointer'>
      <img src={IMG_CDN_URL + posterPath } alt="Movie Card " />
    </div>
  )
}

export default MovieCard

