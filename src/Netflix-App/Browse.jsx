import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import SecondaryContainer from './LowerMainContainer'
import UpperMainContainer from './UpperMainContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import useToprateMovies from '../Hooks/useToprateMovies'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useToprateMovies()
  
  return (
    <div className='w-screen' >
    <Header/>
    <UpperMainContainer/>
    <SecondaryContainer/> 
    
    {
      /*MainContainer
           -VideoBackground
           -VideoTitle
        SecondaryContainer
            -movieList *n
            -cards *n
       */
    }

    </div>
  )
}

export default Browse